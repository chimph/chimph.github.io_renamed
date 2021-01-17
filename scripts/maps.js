function initMap() {
    // The location of Uluru
    const paihea = { lat: -35.28212071902843, lng: 174.09160921583938 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: paihea,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: paihea,
      map: map,
    });
  }