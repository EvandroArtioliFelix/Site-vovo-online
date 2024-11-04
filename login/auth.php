<?php
session_start();

$usuarios = [
    'admin' => '123456', // Usuário padrão para login
];

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $action = $_POST['action'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($action == 'register') {
        // Registrar novo usuário (neste exemplo, armazenado em sessão)
        if (!isset($_SESSION['usuarios'])) {
            $_SESSION['usuarios'] = [];
        }
        $_SESSION['usuarios'][$username] = $password;
        echo "Usuário cadastrado com sucesso! <a href='index.html'>Faça login</a>";
    } elseif ($action == 'login') {
        // Verificar login
        $todosUsuarios = array_merge($usuarios, $_SESSION['usuarios'] ?? []);
        if (isset($todosUsuarios[$username]) && $todosUsuarios[$username] == $password) {
            $_SESSION['logado'] = true;
            header('Location: logado.php');
        } else {
            echo "Usuário ou senha incorretos! <a href='../index.html'>Tente novamente</a>";
        }
    }
}
?>
