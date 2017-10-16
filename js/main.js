
var img = document.getElementById('original')
var reader = new FileReader()

reader.onload = function () {
    img.src = reader.result
}

//画像が変わったら実行
original.onload = function () {
    //画像をテキストデータに変える
    Tesseract.recognize(img)
        .then(function (result) {
            document.getElementById("text").value = result.blocks[0].text;
        })
}


//テキストファイルを保存する関数
function TextSave() {

    var text = document.getElementById('text').value
    var name = document.getElementById('name').value || 'sketch'


    var blob = new Blob([text], { type: 'application/processing' })


    var link = document.getElementById('DL_link')

    link.href = window.URL.createObjectURL(blob)


    if ('download' in link) {
        link.download = name + '.pde'
        link.click()


    } else {

        link.textContent = '右クリックから名前を付けて保存してください'

    }

}