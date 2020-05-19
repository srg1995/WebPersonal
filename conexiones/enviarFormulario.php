<?php
// Mostrar errores PHP (Desactivar en producción)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$json = file_get_contents('php://input');
$obj = json_decode($json);


$data = array();

// Incluir la libreria PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require '../dependencias/PHPMailer/src/Exception.php';
require '../dependencias/PHPMailer/src/PHPMailer.php';
require '../dependencias/PHPMailer/src/SMTP.php';

// Inicio
$mail = new PHPMailer(true);

try {
    // Configuracion SMTP
    $mail->SMTPDebug = SMTP::DEBUG_OFF;                         // Mostrar salida (Desactivar en producción)
    $mail->isSMTP();                                               // Activar envio SMTP
    $mail->Host  = 'MV2016101009001.dnssw.net';                     // Servidor SMTP
    $mail->SMTPAuth  = true;                                       // Identificacion SMTP
    $mail->Username  = 'sacris@ssacriss.com.es';                  // Usuario SMTP
    $mail->Password  = 'AO5*gxL7?';             // Contraseña SMTP
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port  = 587;
    $mail->setFrom($obj->email);                // Remitente del correo

    // Destinatarios
    $mail->addAddress('sacris@ssacriss.com.es');  // Email y nombre del destinatario

    // Contenido del correo
    $mail->isHTML(true);
    $mail->Subject = 'Solicitud de información personal';
    $mail->Body  = "Mi nombre es: ".$obj->nombre." ".$obj->apellidos."<br> Me pongo en contacto contigo por la siguiente razón: ".$obj->mensaje;
    $mail->AltBody = $obj->mensaje;
    $mail->send();

    $data['respuesta'] = 'ok';
    echo json_encode($data);

} catch (Exception $e) {

    $data['respuesta'] = 'ko';
    echo json_encode($data);
}
?>