<?php
session_start();
session_destroy();
header('Location: http://localhost/Site-vovo-online/index.html');
exit();
?>
