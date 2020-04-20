async function fetchGetHtml(request) {
  url = 'https://cfw-takehome.developers.workers.dev/api/variants';
  let init = {
    method: 'Get',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  }
  const NAME = 'experiment-0'
  var response = await fetch(url)

  var respBody = await gatherResponse(response)
  console.log(respBody)
  let tofetch = Math.random() < 0.5 ? respBody[0] : respBody[1]
  return fetch(tofetch)
}

async function gatherResponse(response) {
  var { headers } = response

    let body = await response.json()
    let x= body.variants[0]
    let y= body.variants[1]
    return body.variants

    }
addEventListener('fetch', event => {
  event.respondWith(fetchGetHtml(event.request))
})