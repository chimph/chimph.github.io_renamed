function initMap() {
    const paihea = { lat: -35.28212071902843, lng: 174.09160921583938 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: paihea,
    });
    const marker = new google.maps.Marker({
      position: paihea,
      map: map,
    });
  }