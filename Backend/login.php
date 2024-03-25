<?php
include('connection.php');

$email = $_POST['email'];
$password = $_POST['password'];

$query = $mysqli->prepare('select u.id, u.role, u.email, u.password, ui.first_name, ui.last_name
    from users u, user_info ui
    where email=?');
$query->bind_param('s', $email);
$query->execute();
$query->store_result();
$query->bind_result($id, $role, $email, $hashed_password, $first_name, $last_name);
$query->fetch();
$num_rows = $query->num_rows();

if ($num_rows == 0) {
    $response['status'] = "user not found";
} else {
    if (password_verify($password, $hashed_password)) {
        $response['status'] = "logged in";
        $response['user_id'] = $id;
        $response['first_name'] = $first_name;
        $response['last_name'] = $last_name;
        $response['email'] = $email;
        $response['role'] = $role;
    } else {
        $response['status'] = "incorrect credentials";
    }
}
echo json_encode($response);
