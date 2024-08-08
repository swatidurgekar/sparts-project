import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get("http://3.223.98.72:1337/api/students");
    console.log(response.data);

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
