<?php
include('connection.php');

$email = $_POST['email'];

$check_email = $mysqli->prepare('select email from users where email=?');
$check_email->bind_param('s', $email);
$check_email->execute();
$check_email->store_result();
$email_exists = $check_email->num_rows();

if ($email_exists == 0) {
    $password = $_POST['password'];
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);
    $profile_type = $_POST['profile_type'];
    $location = $_POST['location'];

    $query1 = $mysqli->prepare('insert into users(role,email,password) values("user",?,?)');
    $query1->bind_param('ss', $email, $hashed_password);
    $query1->execute();

    $query2 = $mysqli->prepare('select id from users where email=?');
    $query2->bind_param('s', $email);
    $query2->execute();
    $query2->store_result();
    $query2->bind_result($id);
    $query2->fetch();

    if($profile_type == "user") {
        $first_name = $_POST['first_name'];
        $last_name = $_POST['last_name'];

        $query3 = $mysqli->prepare('insert into user_info(user_id,first_name,last_name,location) values(?,?,?,?)');
        $query3->bind_param('ssss', $id, $first_name, $last_name, $location);
        $query3->execute();
    }
    else {
        $company_name = $_POST['company_name'];
        $query3 = $mysqli->prepare('insert into company_info(company_id,name,location) values(?,?,?)');
        $query3->bind_param('sss', $id, $company_name, $location);
        $query3->execute();
    }
    
    $response['status'] = "success";
    $response['message'] = "user was created successfully";
    $response['user_id'] = $id;
} else {
    $response["status"] = "user already exists";
    $response["message"] = "user wasn't created";
}
echo json_encode($response);
