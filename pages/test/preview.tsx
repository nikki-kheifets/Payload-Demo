// to view head to localhost:3000/previews/bedard

export default function handler(req, res) {
    res.setPreviewData({})
    res.end('Preview mode enabled')
  }