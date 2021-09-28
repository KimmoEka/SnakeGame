<?php
/**
 * Created by PhpStorm.
 * User: Kimmo
 * Date: 3.12.2018
 * Time: 9:56
 */
    $aika = $_GET['aika'];
    $nimi = $_GET['nimi'];
    $pisteet = $_GET['pisteet'];
    $servername = "localhost";
    $username = "dbuser02";
    $password = "1234";

// Create connection
    $conn = new mysqli($servername, $username, $password, "pelisivusto");

// Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $sql2 = "select sija from pisteet order by sija desc ";
    $result = mysqli_query($conn, $sql2);
    $fieldinfo = mysqli_fetch_assoc($result);
    $sija = $fieldinfo["sija"] + 1;
    $sql = "insert INTO pisteet (Id, pisteet, sija, nimi, aika) VALUES (1, " . $pisteet . ", " . $sija . ", '" . $nimi . "', '" . $aika . "')";
    mysqli_query($conn, $sql);
    ob_start();
    header("Location: http://localhost:63342/Pelisivustoprojekti/PhpstormProjects/Matopeli/mato.html");
    die();