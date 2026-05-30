<?php
// ================================================================
// config.php – Connexion PDO compatible Docker et développement local
// ================================================================

$host   = getenv('DB_HOST') ?: 'localhost';
$dbname = getenv('DB_NAME') ?: 'locavo_db';
$user   = getenv('DB_USER') ?: 'root';
$pass   = getenv('DB_PASS') ?: '';

try {
    $pdo = new PDO(
        "mysql:host={$host};dbname={$dbname};charset=utf8mb4",
        $user,
        $pass
    );
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->exec("SET NAMES 'utf8mb4'");
} catch (PDOException $e) {
    http_response_code(500);
    die(
        "<h2 style='color:red;font-family:sans-serif;text-align:center;margin-top:80px;'>"
        . "Erreur de connexion à la base de données.<br>"
        . "<small>" . htmlspecialchars($e->getMessage()) . "</small>"
        . "</h2>"
    );
}
?>
