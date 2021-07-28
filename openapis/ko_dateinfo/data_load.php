<?
//전달받은 변수
$serviceUrl = $_GET['serviceUrl'];
$year = $_GET['year'];
$month = $_GET['month'];

//url만들기
$urlEnKey = 'IEn1HAcY%2BEqkVWTn5g7hUuIquNG3RsrqoYajTMd0VAvWRbwc6rJoja%2FrwmGJ3AIUpsQtqcitHJ2GOruzwlIVfw%3D%3D';
$baseUrl = 'http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/';
$url = $baseUrl.$serviceUrl.'?solYear='.$year.'&ServiceKey='.$urlEnKey.'&_type=json';
if($month >= 1 && $month <=12){ $url .= '&solMonth='.$month; }

//curl실행
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');

$response = curl_exec($ch);
curl_close($ch);

echo json_encode($response);

// $object = simplexml_load_string($response);

// echo $object;
?>