function navBarFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var dhcpFields = document.getElementById("dhcpFields");
var staticFields = document.getElementById("staticIPfields");

function WiFi() {
  document.getElementById("networkName").required = true;
  document.getElementById("networkPassword").required = true;
  if (dhcpFields != null) dhcpFields.style.display = "block";
  if (staticFields != null) staticFields.style.display = "block";
}

function Ethernet() {
  document.getElementById("networkName").required = false;
  document.getElementById("networkPassword").required = false;
  if (dhcpFields != null) dhcpFields.style.display = "none";
  if (staticFields != null) staticFields.style.display = "block";
}

function ValidateIPaddressOnChange(input, type) {
  var ipformat =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  var strtype = "";
  switch (type) {
    case "ipaddress":
      strtype = "IP Address";
      break;
    case "gateway":
      strtype = "Gateway";
      break;
    case "subnet":
      strtype = "Subnet Mask";
      break;
    case "dns":
      strtype = "DNS";
      break;
  }

  if (!input.value.match(ipformat)) {
    document.getElementById(input.name).className = document
      .getElementById(input.name)
      .className.replace(/(?:^|\s)correct(?!\S)/g, "");
    document.getElementById(input.name).className += " wrong";
    input.focus();
    alert(strtype + " is invalid!");
  } else if (input.value != null) {
    document.getElementById(input.name).className = document
      .getElementById(input.name)
      .className.replace(/(?:^|\s)wrong(?!\S)/g, "");
    document.getElementById(input.name).className += " correct";
  }
}

function ValidateIPaddress() {
  var ipformat =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  var ipaddr = document.forms["simple_form"]["ipAddress"];
  var gateway = document.forms["simple_form"]["gateway"];
  var subnet = document.forms["simple_form"]["subnet"];
  var dns = document.forms["simple_form"]["dns"];

  if (ipaddr.value.match(ipformat)) {
    ipaddr.focus();
  } else {
    alert("You have entered an invalid IP Address!");
    ipaddr.focus();
    return false;
  }
  if (gateway.value.match(ipformat)) {
    gateway.focus();
  } else {
    window.alert("You have entered an invalid GATEWAY Address!");
    gateway.focus();
    return false;
  }
  if (subnet.value.match(ipformat)) {
    subnet.focus();
  } else {
    window.alert("You have entered an invalid SUBNET Address!");
    subnet.focus();
    return false;
  }
  if (dns.value.match(ipformat)) {
    dns.focus();
  } else {
    window.alert("You have entered an invalid DNS Address!");
    dns.focus();
    return false;
  }
}

var text_box = document.querySelector(".text_box");
var rs1 = document.querySelector(".relay_status1");
var rs2 = document.querySelector(".relay_status2");

if (text_box != null || rs1 != null || rs2 != null) {
  function refresh() {
    setTimeout(function () {
      if ($(".text_box").length) $(".text_box").load("events_placeholder.html");
      if ($(".relay_status1").length)
        $(".relay_status1").load("relay_status1.html");
      if ($(".relay_status2").length)
        $(".relay_status2").load("relay_status2.html");
      refresh();
    }, 1000);
  }

  $(document).ready(function () {
    if ($(".text_box").length) $(".text_box").load("events_placeholder.html");
    if ($(".relay_status1").length)
      $(".relay_status1").load("relay_status1.html");
    if ($(".relay_status2").length)
      $(".relay_status2").load("relay_status2.html");
    refresh();
  });
}
