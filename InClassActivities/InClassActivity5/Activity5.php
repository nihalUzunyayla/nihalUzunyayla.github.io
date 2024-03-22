<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>Activity 5</title>
    <link rel="stylesheet" type="text/css" href="Activity5.css">
</head>
<body>
    <h1>Registration Form</h1>
    <form method="POST" action="Activity5-preview.php">
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" name="name">
        </div>

        <div class="form-group">
            <label for="Username">Username:</label>
            <input type="text" name="username">
        </div>

        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" name="password">
        </div>

        <div class="form-group">
            <label for="address">Address:</label>
            <input type="text" name="address">
        </div>

        <div class="form-group">
            <label for="country">Country:</label>
            <select id="country" name="country">
                <option value="Turkey" selected disabled>Turkey</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="USA">USA</option>
            </select>
        </div>

        <div class="form-group">
            <label for="zip">ZIP Code:</label>
            <input type="text" name="zip">
        </div>

        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" name="email">
        </div>

        <div class="form-group">
            <label for="gender">Sex:</label>
            <input type="radio" name="sex" value="male">
            <label for="male">Male</label>
            <input type="radio" name="sex" value="female">
            <label for="female">Female</label>
        </div>

        <div class="form-group">
            <label for="language">Language:</label>
            <input type="checkbox" name="language[]" value="English">
            <label for="English">English</label>
            <input type="checkbox" name="language[]" value="French">
            <label for="French">French</label>
            <input type="checkbox" name="language[]" value="Germany">
            <label for="Germany">Germany</label>
            
        </div>

        <div class="form-group">
            <label for="about">About:</label>
            <textarea name="about" cols="40" rows="10"></textarea>
        </div>

        <input type="submit" value="Submit">
    </form>

</body>
</html>
