export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Зөвхөн POST хүсэлт зөвшөөрөгдөнө.' });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ reply: 'Мессеж ирсэнгүй.' });
  }

  // Энд хариултыг шууд буцааж байгаа туршилтын логик
  return res.status(200).json({ reply: `Чи хэллээ: ${message}` });
}
