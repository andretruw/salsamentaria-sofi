$files = @("c:\Users\HP\Documents\proyecto tics\index.html")
$htmlFiles = Get-ChildItem "c:\Users\HP\Documents\proyecto tics\html\*.html"
foreach ($f in $htmlFiles) {
    $files += $f.FullName
}

foreach ($file in $files) {
    $content = Get-Content -Path $file -Raw -Encoding UTF8
    $content = $content.Replace("``n", [Environment]::NewLine)
    $content = $content.Replace("MisiÃ³n", "Misión").Replace("VisiÃ³n", "Visión").Replace("aplicaciÃ³n", "aplicación").Replace("gestiÃ³n", "gestión").Replace("selecciÃ³n", "selección").Replace("ReseÃ±as", "Reseñas").Replace("LÃ¡cteos", "Lácteos").Replace("PanaderÃ­a", "Panadería").Replace("ContÃ¡ctanos", "Contáctanos").Replace("CatÃ¡logo", "Catálogo")
    $content = $content.Replace("Misin", "Misión").Replace("Visin", "Visión").Replace("aplicacin", "aplicación").Replace("gestin", "gestión").Replace("seleccin", "selección").Replace("Reseas", "Reseñas").Replace("Contctanos", "Contáctanos").Replace("Lcteos", "Lácteos").Replace("Panadera", "Panadería")
    $content = $content.Replace("", "")
    [IO.File]::WriteAllText($file, $content, [Text.Encoding]::UTF8)
}
Write-Output "Done fixing HTML files."
