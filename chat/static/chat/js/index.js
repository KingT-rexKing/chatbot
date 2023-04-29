$(function() {
    // ChatGPTボタン押下時の処理
    $('#chat-btn').click(function() {
      $.ajax({
        url: "/chat/",
        type: "POST",
        data: $("#chat-form").serialize(),
        dataType: "text",
        success: function(response) {
          // 応答結果を出力
          $('#chat-results').html(response);
  
          // 音声再生
          var voiceText = response.trim();
          var voice = new SpeechSynthesisUtterance();
          voice.lang = 'ja-JP';
          voice.text = voiceText;
          speechSynthesis.speak(voice);
          const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=${encodeURI(voiceText)}&tl=ja`;
          $('#voice').attr('src', audioUrl);
        },
        error: function(error) {
          console.log(error);
        }
      });
    });
  });
  