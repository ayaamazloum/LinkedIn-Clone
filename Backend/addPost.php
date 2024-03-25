<?php
include('connection.php');

$user_id = $_POST['user_id'];
$media = base64_encode($_POST['media']);
$content = $_POST['content'];
$date_time = $_POST['date_time'];

$query1 = $mysqli->prepare('select u.id from users u where u.id=?');
$query1->bind_param('s', $user_id);
$query1->execute();
$query1->store_result();
$query1->bind_result($id);
$query1->fetch();

$query2 = $mysqli->prepare('insert into posts (user_id, media, content, date_time) values (?,?,?,?)');
$query2->bind_param('ssss', $user_id, $media, $content, $date_time);
$query2->execute();

$response['status'] = "post added successfully";

echo json_encode($response);
