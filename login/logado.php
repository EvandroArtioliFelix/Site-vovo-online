<?php
session_start();
if (!isset($_SESSION['logado'])) {
    header('Location: index.html');
    exit();
}
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bem-vindo</title>
</head>
<body>
    <h2>Bem-vindo! Você está logado.</h2>
    <a href="../page/index.html">Página inicial</a>
    <span>  /  </span>
    <a href="logout.php">Sair</a>
</body>
</html>
