const url = 'https://jsonplaceholder.typicode.com/posts'; // ダミーAPI

document.getElementById('invitation-form').addEventListener('submit', async function(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message')
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const result = await response.json();
    console.log(result); // レスポンスをブラウザのコンソールに表示
    document.getElementById('response').innerText = '送信完了 (ダミーデータ)';
  } catch (error) {
    document.getElementById('response').innerText = 'エラーが発生しました';
  }
});
