init = (tab) => {
  const {tabId, url} = tab;
  // chrome.scripting.executeScript(
  //   {
  //     target: {tabId, allFrames: true},
  //     files: ['clientside.js']
  //   }
  // )
  console.log(`Loading: ${url}`); 
}

chrome.webRequest.onBeforeRequest.addListener(
  init,          
  {urls: ["https://medium.com/p/*/deltas?logLockId=*"]}
)