var part1=
`
<!Doctype html>
<html>
<head>
<meta charset="UTF-8"/>
<title>Highlighted Code</title>
<link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/gh/symlc112233/cnblogs@v2.0/Hightlight%20Code/file/styles/SyntaxHighlighter.css"></link>
<script language="javascript" src="https://cdn.jsdelivr.net/gh/symlc112233/cnblogs@v2.0/Hightlight%20Code/file/scripts/shCore.js"></script>
<script language="javascript" src="https://cdn.jsdelivr.net/gh/symlc112233/cnblogs@v2.0/Hightlight%20Code/file/scripts/`;

var part2=
`.js"></script>
</head>
<body>
<textarea name="code" id="code" class="`;

var part3=
`">`;

var part4=
`</textarea>
<script language="javascript">
  dp.SyntaxHighlighter.HighlightAll('code', true,false);
  document.body.removeChild(document.getElementById("code"));
</script>
<script language="javascript">
  window.stop(); //works in all browsers but IE    
  if ($.browser.msie) {document.execCommand("Stop");};
</script>
</body>
</html>
`;

var lanDict={"c++":"shBrushCpp","c#":"shBrushCSharp","css":"shBrushCss","delphi":"shBrushDelphi","xml":"shBrushXml","java":"shBrushJava","javascript":"shBrushJScript","php":"shBrushPhp","python":"shBrushPython","ruby":"shBrushRuby","sql":"shBrushSql","vb":"shBrushVb"};
