# QR Code Reader

<script src="qr-scanner.umd.min.js"></script>
<script src="script.js"></script>
<p id="safari" style="display: none;">
    Copy and paste a QR Code Image<br/>
    <button id="paste">Click to Paste Copied Image</button><br/>
    (Note: You can only copy and paste PNG image on iOS due to Clipboard API Limitations. Use "Select a File" option below for other image types.)
</p>
<p id="others" style="display: visible;">
    Copy and paste a QR Code Image anywhere in this page
</p>
<canvas id="qrcode" style="width: 200px; height: 200px;"></canvas>

<p/>
or Select a File
<input type="file" id="file-selector" />
<br/>
(Note: Selected file is processed locally on the browser and not sent to any server)
<hr/>
<div id="data"></div>
<script src="bottom.js"></script>
<br/><br/><br/>
<hr/>
Credits:
* [Javascript on Github Pages](https://code-maven.com/javascript-on-github-pages)
* [qr-scanner](https://github.com/nimiq/qr-scanner)
* [Retrieve image from clipboard with JavaScript](https://ourcodeworld.com/articles/read/491/how-to-retrieve-images-from-the-clipboard-with-javascript-in-the-browser)
* [Async Clipboard API](https://webkit.org/blog/10855/async-clipboard-api/)
<p/>
[Home](../)
