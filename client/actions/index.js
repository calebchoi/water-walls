$(() => {
  $('button').click(() => {
    const height = $('input').val().split(',');
    for (let i = 0; i < height.length; i++) {
      height[i] = +height[i];
    }

    const request = new Request('http://localhost:8000/findWaterWall', {
      method: 'post',
      body: JSON.stringify({height: height}),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });

    fetch(request)
      .then(res => {
        return res.json();
      })
      .then(result => {
        console.log(result);
      })
  });
})