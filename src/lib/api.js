export async function fetchChannelBlocks(channelSlug) {
  const response = await fetch(`https://api.are.na/v2/channels/${channelSlug}?per=100`, {
    headers: {
      'Accept': 'application/json',
      'Authorization': 'DoRS3c_nG3Cz2Cr9RP1F3qtzLOhRYFWfE6raYnv2jV8'
    }
  });
  const data = await response.json();
  return data.contents;
}