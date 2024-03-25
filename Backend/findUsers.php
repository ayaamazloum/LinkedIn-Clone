<?php
include('connection.php');

$text = $_POST['text'];

$users = [];

$query1 = $mysqli->prepare('select * from company_info where lower(name) like lower(?)');
$text_param = '%'.$text.'%';
$query1->bind_param('s', $text);
$query1->execute();
$query1->store_result();
$num_rows = $query1->num_rows();

if ($num_rows > 0) {
    $query1->bind_result($id, $company_id, $company_name, $location, $industry, $description);
    while ($query1->fetch()) {
        $user = [
            'company_id' => $company_id,
            'company_name' => $company_name,
            'location' => $location,
            'industry' => $industry,
            'description' => $description
        ];
        $users[] = $user;
    }
}

$query2 = $mysqli->prepare('select * from user_info where lower(first_name) like lower(?) or lower(last_name) like lower(?)');
$query2->bind_param('ss', $text_param, $text_param);
$query2->execute();
$query2->store_result();
$num_rows = $query2->num_rows();

if ($num_rows > 0) {
    $query2->bind_result($id, $user_id, $first_name, $last_name, $phone_number, $location, $bio);
    while ($query2->fetch()) {
        $user = [
            'user_id' => $user_id,
            'first_name' => $first_name,
            'last_name' => $last_name,
            'phone_number' => $phone_number,
            'location' => $location,
            'bio' => $bio
        ];
        $users[] = $user;
    }
}

$response['status'] = 'success';
$response['users'] = $users;

echo json_encode($response);
