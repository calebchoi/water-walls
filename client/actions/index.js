$(() => {
  $('button').click(() => {
    $('.water-blocks').html('');
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
        renderWaterWall(height, result.waterCount, result.maxTrappedWater);
      })
      .catch(err => {
        alert('ERROR! Incorrect input or system error');
      })
  });
  
  const renderWaterWall = (height, waterCount, maxTrappedWater) => {
    const maxHeight = Math.max(...height) + 1;
    for (let i = 0; i <= height.length; i++) {
      $('.water-blocks').append(`<div class="column" id=col${i}></div>`);
      if (i === 0) {
        for (j = 0; j < maxHeight; j++) {
          $(`#col${i}`).append(`<div class="box">${j + 1}</div>`);
        }
      } else {
        let empty = maxHeight - height[i-1] - waterCount[i-1];
        // render empty grids
        for (let k = 0; k < empty; k++) {
          $(`#col${i}`).append('<div class="box"></div>');
        }
        // render water grids
        for (let k = 0; k < waterCount[i-1]; k++) {
          $(`#col${i}`).append('<div class="box" id="water"></div>');
        }
        // render walls
        for (let k = 0; k < height[i-1]; k++) {
          if (i === maxTrappedWater[0] || i === maxTrappedWater[1]) {
            $(`#col${i}`).append('<div class="box" id="maxWall"></div>');
          } else {
            $(`#col${i}`).append('<div class="box" id="wall"></div>');
          }
        }
      }
    }
  }
});
