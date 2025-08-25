import { Router } from 'express';
import axios from 'axios';

const router = Router();

/**
 * POST /translate
 * body: { text: string, to: string, from?: string }
 */
router.post('/', async (req, res) => {
  try {
    const { text, to, from } = req.body || {};
    if (!text || !to) {
      return res.status(400).json({ error: 'Missing required fields: text, to' });
    }

    const endpoint = 'https://api.cognitive.microsofttranslator.com/translate';
    const params = new URLSearchParams({ 'api-version': '3.0', to });
    if (from) params.append('from', from);

    const key = process.env.AZURE_TRANSLATOR_KEY;
    const region = process.env.AZURE_TRANSLATOR_REGION;
    if (!key || !region) {
      return res.status(500).json({ error: 'Azure Translator env vars not set' });
    }

    const response = await axios.post(
      `${endpoint}?${params.toString()}`,
      [{ Text: text }],
      {
        headers: {
          'Ocp-Apim-Subscription-Key': key,
          'Ocp-Apim-Subscription-Region': region,
          'Content-Type': 'application/json'
        },
        timeout: 10000
      }
    );

    const translated = response.data?.[0]?.translations?.[0]?.text || null;
    res.json({ translated, raw: response.data });
  } catch (err) {
    console.error(err?.response?.data || err.message);
    res.status(500).json({ error: 'Translation failed', detail: err?.response?.data || err.message });
  }
});

export default router;
