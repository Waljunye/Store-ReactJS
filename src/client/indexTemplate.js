export const indexTemplate = (content) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Reddit</title>
    <script src="/static/client.js" type="application/javascript"></script>
</head>
<body>
    <section id="react_root">${content}</section>
</body>
</html>`;