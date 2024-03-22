
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Activity5-Preview</title>
</head>
<body>
    <h1>Prewiev</h1>
    <?php
    if (!empty($_POST['name'])){
        echo $_POST['name'] . "<br>";
    }
    else{
        echo "Name: Not provided<br>";
    }
    if (!empty($_POST['username'])) {
        echo $_POST['username'] . "<br>";
    } else {
        echo "Username: Not provided<br>";
    }
    if (!empty($_POST['password'])) {
        echo $_POST['password'] . "<br>";
    } else {
        echo "Password: Not provided<br>";
    }
    if (!empty($_POST['address'])) {
        echo $_POST['address'] . "<br>";
    } else {
        echo "Address: Not provided<br>";
    }
    if (!empty($_POST['country'])) {
        echo $_POST['country'] . "<br>";
    } else {
        echo "Country: Not provided<br>";
    }
    if (!empty($_POST['zip'])) {
        echo $_POST['zip'] . "<br>";
    } else {
        echo "Zip: Not provided<br>";
    }
    if (!empty($_POST['email'])) {
        echo $_POST['email'] . "<br>";
    } else {
        echo "Email: Not provided<br>";
    }
    if (!empty($_POST['language'])) {
    if (is_array($_POST['language'])) {
        foreach($_POST['language'] as $language) {
            echo $language . "<br>";
        }
    } else {
        echo $_POST['language'] . "<br>";
        }
    }
    else {
        echo "Language: Not provided<br>";
    }
    if (!empty($_POST['about'])) {
        echo $_POST['about'] . "<br>";
    } else {
        echo "About: Not provided<br>";
    }
    ?>

</body>
</html>
