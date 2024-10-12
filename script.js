document.getElementById('invitation-form').addEventListener('submit', async function(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  // フォームのデータを取得
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message')
  };

  try {
    // Google Apps ScriptのURLに送信
    const response = await fetch('https://script.google.com/macros/s/AKfycbw5oFCTg67BCmoeXsEj1W9MQDY5wY-WysyhkHEfmdXrKOfuBc69q4wUlew9Ti4tu4b6lg/exec', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // レスポンスの処理
    const result = await response.json();
    console.log(result); // 結果をブラウザのコンソールに表示
    document.getElementById('response').innerText = '送信が完了しました！';
  } catch (error) {
    document.getElementById('response').innerText = 'エラーが発生しました。再度お試しください。';
  }
});