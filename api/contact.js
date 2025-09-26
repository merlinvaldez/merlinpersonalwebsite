export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end(); // only allow POST
  }

  res.status(200).json({ message: "API is working!" });
}
