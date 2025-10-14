const channel = new BroadcastChannel('darkcafe_channel');

function sendToGoogleSheet(item) {
  fetch(https://script.google.com/macros/s/AKfycbzDLLKhJg1-5upRYC3JJBmHBOQm37L_qWwuLXrQYod7y2cXRmdzf_-CzYfNe6EL4mfS/exec', {
    method: 'POST',
    body: JSON.stringify(item),
    headers: {'Content-Type': 'application/json'}
  })
  .then(res => console.log('✅ تم الإرسال للـ Sheet'))
  .catch(err => console.error('❌ حصل خطأ:', err));

  channel.postMessage(item);
}

function saveOrder() {
  const item = {
    name: document.getElementById('itemName').value,
    price: document.getElementById('itemPrice').value
  };
  sendToGoogleSheet(item);
  alert("تم حفظ الطلب ✅");
}
