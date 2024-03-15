<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Java Jam Coffee House</title>
    <meta name="description" content="CENG 311 Inclass Activity 1">
</head>
<body>

<?php
// Associative array to store exchange rates
$rates = array(
    "FUSD" => array("TCAD" => 1.35, "TEUR" => 0.92, "TUSD" => 1),
    "FCAD" => array("TUSD" => 1 / 1.35, "TEUR" => 0.68, "TCAD" => 1),
    "FEUR" => array("TUSD" => 1 / 0.92, "TCAD" => 1 / 0.68, "TEUR" => 1)
);

$from_value = $to_value = '';
$from_currency = isset($_GET['from_currency']) ? $_GET['from_currency'] : 'FUSD';
$to_currency = isset($_GET['to_currency']) ? $_GET['to_currency'] : 'TUSD';

if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET['from_value']) && isset($_GET['from_currency']) && isset($_GET['to_currency'])) {
    $from_value = $_GET['from_value'];
    $from_currency = $_GET['from_currency'];
    $to_currency = $_GET['to_currency'];

    $to_value = $from_value * $rates[$from_currency][$to_currency];
}
?>

<form action="uzunyayla_sarikaya.php" method="GET">
    <table>
        <tr>
            <td>From:</td>
            <td><input type="text" name="from_value" value="<?php echo htmlspecialchars($from_value); ?>"></td>
            <td>Currency:</td>
            <td>
                <select name="from_currency">
                    <option value="FUSD" <?php if ($from_currency == 'FUSD') echo 'selected'; ?>>USD</option>
                    <option value="FCAD" <?php if ($from_currency == 'FCAD') echo 'selected'; ?>>CAD</option>
                    <option value="FEUR" <?php if ($from_currency == 'FEUR') echo 'selected'; ?>>EUR</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>To:</td>
            <td><input type="text" name="to_value" value="<?php echo htmlspecialchars($to_value); ?>"></td>
            <td>Currency:</td>
            <td>
                <select name="to_currency">
                    <option value="TUSD" <?php if ($to_currency == 'TUSD') echo 'selected'; ?>>USD</option>
                    <option value="TCAD" <?php if ($to_currency == 'TCAD') echo 'selected'; ?>>CAD</option>
                    <option value="TEUR" <?php if ($to_currency == 'TEUR') echo 'selected'; ?>>EUR</option>
                </select>
            </td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td><input type="submit" name="convert" value="Convert" /></td>
        </tr>
    </table>
</form>

</body>
</html>