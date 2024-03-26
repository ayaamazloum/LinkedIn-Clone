<?php
include('connection.php');

$follower_id = intval($_POST['follower_id']);
$followed_id = intval($_POST['followed_id']);

$query1 = $mysqli->prepare('select id from users where id=?');
$query1->bind_param("i", $follower_id);
$query1->execute();
$query1->store_result();
$query1->bind_result($follower_id);
$query1->fetch();

$query1 = $mysqli->prepare('select id from users where id=?');
$query1->bind_param("i", $followed_id);
$query1->execute();
$query1->store_result();
$query1->bind_result($followed_id);
$query1->fetch();

$query3 = $mysqli->prepare('insert into follows(follower_id,followed_id) values(?,?)');
$query3->bind_param('ii', $follower_id, $followed_id);
$query3->execute();

$response['status'] = 'success';

echo json_encode($response);
