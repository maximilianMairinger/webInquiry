import ajax, { storage } from "./ajax"


(async () => {
  storage["userKey"] = (await ajax.post("createSession", {})).userKey


  await ajax.post("log", {ok: "okok"})
})()



