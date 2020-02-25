import ajaon from "ajaon"

export const storage = {}

export default ajaon("http://127.0.0.1:8000", "userKey", storage)
