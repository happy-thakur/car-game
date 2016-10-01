
      var count = 1, inc = 0;
      var div ,
          profit ,
          loss ;
      var x,
          profit_pos,
          loss_pos;
      var img ;
      $(function(){

        function call(){
         div = $(".main_div"),
              profit ,
              loss ;
          x = div.position(),
              profit_pos,
              loss_pos;
          img = $("img.road");

          //this is done to move the screen..
          div.css("top", Math.floor(x.top - 10) + "px");
          $('div.score').html(inc);
          inc++;
          if(profit_pos != undefined)
          {
            // alert('helllo');
            profit.css("top", profit_pos.top + 5 + "px");
          }
          else {
            console.log('undefined');
          }
          if(loss_pos != undefined)
          {
            loss.css("top", loss_pos.top + 5 + "px");
          } else {
            console.log('undefined***');
          }
          // console.log(profit_pos.top);
          // console.log(loss_pos.top);
          //condition for game over..
          if(x.top > -10000 && count == 1)
          {
            setTimeout(call, 10);
          }
          else {
            {
              console.log('game over');
            }
          }
          if(count == 1)
          {
            //this is done to add more images..
            if(inc%20 == 0)
            {
              $("div.one").append("<img src='road1.jpg' />");
            }

            //this is done to add profit
            if (inc%50 == 0) {
              // div.append('<div class="profit'+inc+'">P</div>');
              // $('div.profit' + inc).css('position', 'absolute');
              // $('div.profit' + inc).css('left', '50%');
              // $('div.profit' + inc).css('right', '20px');
              // $('div.profit' + inc).css('background', 'rgba(0,0,0,0.8)');
              div.append('<img src="rup.jpg" class="profit" style="position: fixed; top: '+inc+'px; left: 50%; height: 25px; width: 25px;">');
              profit = $("img.profit");
              profit_pos = profit.position();
            }

            //this is done to add loss..
            if (inc%55 == 0) {
              // div.append('<div class="loss'+inc+'">L</div>');
              // $('div.loss' + inc).css('position', 'absolute');
              // $('div.loss' + inc).css('left', '50%');
              // $('div.loss' + inc).css('right', '20px');
              // $('div.loss' + inc).css('background', 'rgba(0,0,0,0.8)');
              div.append('<img src="virus.jpg" class="loss" style="position: fixed; top: '+inc+'px; left: 45%; height: 25px; width: 25px;">');
              loss = $("img.loss");
              loss_pos = loss.position();

            }

            // if(profit_pos.top >= 390)
            // {
            //   profit.remove();
            // }
            // if(loss_pos.top >= 390)
            // {
            //   loss.remove();
            // }
            //how frequently wee will add profit and loss..
            // if(x.top % 100== 0)
            // {
            //   //this is done to add profit and loss div on road..
            //   var rand = Math.floor(Math.random() * 100);
            //   //condition for profit
            //   if(rand % 3 == 0)
            //   {
            //     $('body').append('<p>P</p>');
            //     console.log('P');
            //   }
            //   if(rand % 5== 0)
            //   {
            //     $('body').append('<p>L</p>');
            //     console.log('L');
            //   }
            // }
          }
        }
        call();
        //coading to handle the car..
        $("html").keydown(function(event){
          // alert('hello');
          event.preventDefault();
          var x = $('div.car').position();
          var key_val = event.keyCode
          if(count == 1)
          {
            if(key_val == 38)
            {
              //up arrow..
              $('div.car').css('top', x.top - 10 + "px");
            }
            else if(key_val == 39)
            {
              //right arrow..
              $('div.car').css('left', x.left + 10 + "px");
            }
            else if(key_val == 40)
            {
              //down arrow..
              $('div.car').css('top', x.top + 10 + "px");
            }
            else if(key_val == 37)
            {
              //left arrow..
              $('div.car').css('left', x.left - 10 + "px");
            }
            if(x.left <= 27 || x.left >= 127 || x.top <= 10 || x.top >= 470)
            {
              count = 0;
            }
          }
          console.log(event);
          console.log(key_val);
        });
      });
