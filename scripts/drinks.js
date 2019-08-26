function Data(response) {
  document.Team.tName.value = response.feed.entry[0].gs$cell.$t;
}
