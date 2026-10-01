/*
    |||||||| Email Name ||||||||    -   ||| Id |||
    01. Acceso Condicional                  1
    02. MFA Corto                           2
    03. MFA Largo                           3








*/
import { compareObjectsByProperty } from "./helpers";


export const all_prebuilt_emails = [
    {
        id: 1,
        name: '01. Acceso Condicional',
        url: `https://html-email-builder.pages.dev/images/previews/prebuilt-1.png`,
        code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>MAIL BUILDER IT: Entre todos protegemos la información de la compañía</title>
    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            margin: 0 auto !important;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            height: 100% !important;
            width: 100% !important;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode:bicubic;
            border: none;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }


        .margin-0                       { margin: 0 !important; }

        .padding-horizontal-standard    { padding-left: 20px !important; padding-right: 20px !important; }
        .padding-horizontal-double      { padding-left: 30px !important; padding-right: 30px !important; }
        
        .back-color-general             { background-color: #E1E1E1 !important; }
        .back-color-normal              { background-color: #ffffff !important; }
        .back-color-standard            { background-color: #f1f4f4 !important; }
        .back-color-alternative         { background-color: #b11818 !important; }
        .back-color-footer              { background-color: #000000 !important; }
    </style>
</head>

<body width="100%" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0" style="margin: 0; padding: 0; mso-line-height-rule: exactly; background-color: #E1E1E1;" bgcolor="#E1E1E1">

    <!--100% body table-->
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="back-color-general">
        <tr class="back-color-general">
            <td>
                <!--email container-->
                <table role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" width="600" class="back-color-normal">

                    <!-------------------------Header-------------------------------->
                    <!-------------------------Header-------------------------------->
                    <!-------------------------Header-------------------------------->
                    <tr class="back-color-normal" align="center">
                        <td class="padding-horizontal-double"
                        style="padding-top: 25px; padding-bottom: 25px;" align="center" valign="middle">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tbody>
                                    <tr>
                                        <!--Logo-->
                                        <td style="width: 33%;" align="left" valign="middle">
                                            <a 
                                                href="https://example.com"
                                                target="_blank">
                                                    <img
                                                        src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png"
                                                        alt="logo mail builder"
                                                        width="130" height="56" alt="Mail Builder" border="0"
                                                        style="display:block; margin: 0 !important;"
                                                    />
                                            </a>
                                        </td>
                                        <!--Mensaje-->
                                        <td style="width: 67%;" align="right" valign="middle">
                                            <p  
                                                style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size:22px; font-weight:bolder;color:#A6A9A9;"
                                            >
                                            MAIL BUILDER IT
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                    </tr>


                    <!-------------------------Image-------------------------------->
                    <!-------------------------Image-------------------------------->
                    <!-------------------------Image-------------------------------->
                    <tr class="back-color-standard" align="center">
                        <td align="center" valign="middle">
                            <img
                                src="https://html-email-builder.pages.dev/images/headers/header-security-1.png"
                                alt="portada"
                                width="100%"
                                height="auto"
                            />
                        </td>
                    </tr>


                    <!-------------------------Paragraph-------------------------------->
                    <!-------------------------Paragraph-------------------------------->
                    <!-------------------------Paragraph-------------------------------->
                    <tr class="back-color-standard" align="center">
                        <td class="padding-horizontal-double"
                        style="padding-top: 25px; padding-bottom: 25px;" align="center" valign="middle">
                            <p 
                                style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size:16px; color:#020202; line-height: 22px;"
                            >
                                Nuestros móviles cada vez tienen más información personal y empresarial a la que ningún tercero debería poder acceder.
                                <br><br>
                                A partir de este <b>miércoles 5 de febrero,</b> la información de tus
                                dispositivos de <span style="color:red">MAIL BUILDER</span> podrá estar mucho más protegida si <b>configuras el Portal de Empresa.</b>
                            </p>
                        </td>
                    </tr>


                    <!-------------------------Title-------------------------------->
                    <!-------------------------Title-------------------------------->
                    <!-------------------------Title-------------------------------->
                    <tr class="back-color-normal" align="center">
                        <td class="padding-horizontal-double"
                        style="padding-top: 25px;" align="center" valign="middle">
                            <h2 style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; color:#020202;">Beneficios de configurar <br> tu portal de empresa</h2>
                        </td>
                    </tr>
                    

                    <!-------------------------Triple Column-------------------------------->
                    <!-------------------------Triple Column-------------------------------->
                    <!-------------------------Triple Column-------------------------------->
                    <!-- Change the width in every <td> to make it double or whatever -->
                    <tr class="back-color-normal" align="center">
                        <td class="padding-horizontal-double"
                        style="padding-top: 25px; padding-bottom: 25px;" align="center" valign="middle">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                    <tr align="center" valign="top" style="height:80px">
                                        <td style="width: 33%; padding: 10px;">
                                            <img src="https://html-email-builder.pages.dev/images/icons/icon-shield.png" alt="Icono proteccion">
                                            <p 
                                                style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size:16px; color:#020202; line-height: 22px;"
                                            >Protección de tus datos e identidad digital</p>
                                        </td>
                                        <td style="width: 33%; padding: 10px;">
                                            <img src="https://html-email-builder.pages.dev/images/icons/icon-shield.png" alt="Icono borrado">
                                            <p 
                                                style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size:16px; color:#020202; line-height: 22px;"
                                            >Borrado directo ante la pérdida o robo de dispositivos</p>
                                        </td>
                                        <td style="width: 33%; padding: 10px;">
                                            <img src="https://html-email-builder.pages.dev/images/icons/icon-shield.png" alt="Icono defensa">
                                            <p 
                                                style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size:16px; color:#020202; line-height: 22px;"
                                            >Defensa frente a posibles amenazas digitales</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>


                    <!-------------------------Title-------------------------------->
                    <!-------------------------Title-------------------------------->
                    <!-------------------------Title-------------------------------->
                    <tr class="back-color-standard" align="center">
                        <td class="padding-horizontal-double"
                        style="padding-top: 35px; padding-bottom: 25px;" align="center" valign="middle">
                            <h2 style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; color:#020202;">¿Qué tengo que hacer <br> si mi dispositivo es personal?</h2>
                        </td>
                    </tr>


                    <!-------------------------Image-------------------------------->
                    <!-------------------------Image-------------------------------->
                    <!-------------------------Image-------------------------------->
                    <tr class="back-color-standard" align="center">
                        <td style="padding-bottom: 25px;"  align="center" valign="middle">
                            <img
                                src="https://html-email-builder.pages.dev/images/others/other-4.png"
                                alt="dispositivo personal"
                                width="100%"
                                height="auto"
                            />
                        </td>
                    </tr>


                    <!-------------------------Paragraph-------------------------------->
                    <!-------------------------Paragraph-------------------------------->
                    <!-------------------------Paragraph-------------------------------->
                    <tr class="back-color-normal" align="center">
                        <td class="padding-horizontal-double" align="center" valign="middle">
                            <p 
                                style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size:16px; color:#020202; line-height: 22px;"
                            >
                                Deberás configurar el Portal de empresa, para lo que se te solicitará el PIN de 4 dígitos del dispositivo. Al hacerlo, se fuerza la instalación de: 
                            </p>
                        </td>
                    </tr>

                    <!-------------------------Image-------------------------------->
                    <!-------------------------Image-------------------------------->
                    <!-------------------------Image-------------------------------->
                    <tr class="back-color-normal" align="center">
                        <td class="padding-horizontal-standard"
                        style="padding-top: 15px; padding-bottom: 25px;" align="center" valign="middle">
                            <img
                                src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png"
                                alt="banner de servicios"
                                width="100%"
                                height="auto"
                            />
                        </td>
                    </tr>


                    <!-------------------------Paragraph-------------------------------->
                    <!-------------------------Paragraph-------------------------------->
                    <!-------------------------Paragraph-------------------------------->
                    <tr class="back-color-normal" align="center">
                        <td class="padding-horizontal-double" style="padding-bottom: 15px;" align="center" valign="middle">
                            <p 
                                style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size:16px; color:#020202; line-height: 22px;"
                            >
                                En caso contrario, se te solicitará información de seguridad complementaria al acceder a las aplicaciones corporativas de <span style="color:red">MAIL BUILDER</span>.<br>Ver aquí:
                            </p>
                        </td>
                    </tr>


                    <!-------------------------2 Image buttons-------------------------------->
                    <!-------------------------2 Image buttons-------------------------------->
                    <!-------------------------2 Image buttons-------------------------------->
                    <tr class="back-color-normal" align="center">
                        <td class="padding-horizontal-double" 
                        style="padding-bottom: 35px;" align="center" valign="middle">
                            <table cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center">
                                        <a 
                                        href="https://example.com"
                                        target="_blank">
                                            <img
                                                src="https://html-email-builder.pages.dev/images/others/other-3.png"
                                                width="auto"
                                                height="43px"
                                            />
                                        </a>
                                        &nbsp;&nbsp;&nbsp;
                                        <a 
                                        href="https://example.com"
                                        target="_blank">
                                            <img
                                                src="https://html-email-builder.pages.dev/images/others/other-5.png"
                                                width="auto"
                                                height="43px"
                                            />
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>


                    <!-------------------------Title-------------------------------->
                    <!-------------------------Title-------------------------------->
                    <!-------------------------Title-------------------------------->
                    <tr class="back-color-standard" align="center">
                        <td class="padding-horizontal-double"
                        style="padding-top: 35px; padding-bottom: 25px;" align="center" valign="middle">
                            <h2 style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; color:#020202;">¿Qué tengo que hacer <br> si mi dispositivo es corporativo?</h2>
                        </td>
                    </tr>


                    <!-------------------------Image-------------------------------->
                    <!-------------------------Image-------------------------------->
                    <!-------------------------Image-------------------------------->
                    <tr class="back-color-standard" align="center">
                        <td style="padding-bottom: 15px;" align="center" valign="middle">
                            <img
                                src="https://html-email-builder.pages.dev/images/others/other-1.png"
                                alt="dispositivo personal"
                                width="100%"
                                height="auto"
                            />
                        </td>
                    </tr>



                    <!-------------------------Title-------------------------------->
                    <!-------------------------Title-------------------------------->
                    <!-------------------------Title-------------------------------->
                    <tr class="back-color-normal" align="center">
                        <td class="padding-horizontal-double" style="padding-top: 25px;" align="center" valign="middle">
                            <h2 style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; color:#020202;">¿Tienes configurado el portal de empresa?</h2>
                        </td>
                    </tr>

                    <!-------------------------Paragraph-------------------------------->
                    <!-------------------------Paragraph-------------------------------->
                    <!-------------------------Paragraph-------------------------------->
                    <tr class="back-color-normal" align="center">
                        <td class="padding-horizontal-double" style="padding-top: 25px; padding-bottom: 15px;" align="center" valign="middle">
                            <p 
                                style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size:16px; color:#020202; line-height: 22px;"
                            >
                                <span style="color:red; font-size: 18px; font-weight: bold;">SÍ</span>
                                <br>
                                Sigue accediendo con normalidad a tus documentos y aplicaciones corporativas.
                            </p>
                        </td>
                    </tr>

                    <!-------------------------Paragraph-------------------------------->
                    <!-------------------------Paragraph-------------------------------->
                    <!-------------------------Paragraph-------------------------------->
                    <tr class="back-color-normal" align="center">
                        <td class="padding-horizontal-double" style="padding-top: 15px; padding-bottom: 15px; border-top: 2px dashed #bbbbbb !important;" align="center" valign="middle">
                            <p 
                                style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size:16px; color:#020202; line-height: 22px;"
                            >
                            <span style="color:red; font-size: 18px; font-weight: bold;">NO</span>
                                <br>
                                Las aplicaciones corporativas solicitarán información de seguridad complementaria. Configura tu portal de empresa.
                            </p>
                        </td>
                    </tr>

                    <!-------------------------Paragraph-------------------------------->
                    <!-------------------------Paragraph-------------------------------->
                    <!-------------------------Paragraph-------------------------------->
                    <tr class="back-color-normal" align="center">
                        <td class="padding-horizontal-double" style="padding-top: 15px; padding-bottom: 35px; border-top: 2px dashed #bbbbbb !important;"  align="center" valign="middle">
                            <p 
                                style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size:16px; color:#020202; line-height: 22px;"
                            >
                                <span style="color:red; font-size: 18px; font-weight: bold;">NO LO SÉ</span>
                                <br>
                                <a href="https://example.com">
                                    <span style="text-decoration: underline;font-weight: bolder;">Comprobar.</span>
                                </a>
                            </p>
                        </td>
                    </tr>

                    <!-------------------------Title-------------------------------->
                    <!-------------------------Title-------------------------------->
                    <!-------------------------Title-------------------------------->
                    <tr class="back-color-standard" align="center">
                        <td class="padding-horizontal-double" style="padding-top: 35px;" align="center" valign="middle">
                            <h2 style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; color:#020202;">Configura tu portal de empresa</h2>
                        </td>
                    </tr>

                    <!-------------------------Paragraph-------------------------------->
                    <!-------------------------Paragraph-------------------------------->
                    <!-------------------------Paragraph-------------------------------->
                    <tr class="back-color-standard" align="center">
                        <td class="padding-horizontal-double" style="padding-top: 25px; padding-bottom: 15px;"  align="center" valign="middle">
                            <p 
                                style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size:16px; color:#020202; line-height: 22px;"
                            >
                                Te recordamos que en ningún caso <span style="color:red">MAIL BUILDER</span> accederá a tus datos personales.
                                <br>
                                <br>
                                Para cualquier duda sobre la configuración del dispositivo accede a las <a href="https://example.com"><span style="text-decoration: underline;font-weight: bolder;">guías de Intranet</span></a> o contacta con tu soporte TIC habitual.
                            </p>
                        </td>
                    </tr>


                    <!-------------------------2 Image buttons-------------------------------->
                    <!-------------------------2 Image buttons-------------------------------->
                    <!-------------------------2 Image buttons-------------------------------->
                    <tr class="back-color-standard" align="center">
                        <td class="padding-horizontal-double" style="padding-top: 15px; padding-bottom: 35px;" align="center" valign="middle">
                            <a 
                            href="https://example.com"
                            target="_blank">
                                <img
                                    src="https://html-email-builder.pages.dev/images/others/other-4.png"
                                    alt="Android button"
                                    width="auto"
                                    height="43px"
                                />
                            </a>
                            &nbsp;&nbsp;&nbsp;
                            <a 
                            href="https://example.com"
                            target="_blank">
                            <img
                                src="https://html-email-builder.pages.dev/images/others/other-4.png"
                                alt="Apple button"
                                width="auto"
                                height="43px"
                            />
                            </a>
                        </td>
                    </tr>


                    <!-------------------------Title-------------------------------->
                    <!-------------------------Title-------------------------------->
                    <!-------------------------Title-------------------------------->
                    <tr class="back-color-normal" align="center">
                        <td class="padding-horizontal-double" style="padding-top: 25px; padding-bottom: 15px;" align="center" valign="middle">
                            <h2 style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; color:#020202;">Participa en el sorteo <br> de un iPhone XS de 256GB.</h2>
                        </td>
                    </tr>

                    <!-------------------------Image-------------------------------->
                    <!-------------------------Image-------------------------------->
                    <!-------------------------Image-------------------------------->
                    <tr class="back-color-normal" align="center">
                        <td class="padding-horizontal-double" align="center" valign="middle">
                            <img
                                src="https://html-email-builder.pages.dev/images/icons/icon-shield.png"
                                alt="dispositivo corporativo"
                                width="100%"
                                height="auto"
                            />
                        </td>
                    </tr>


                    <!-------------------------Paragraph-------------------------------->
                    <!-------------------------Paragraph-------------------------------->
                    <!-------------------------Paragraph-------------------------------->
                    <tr class="back-color-normal" align="center">
                        <td class="padding-horizontal-double" style="padding-top: 15px; padding-bottom: 35px;" align="center" valign="middle">
                            <p 
                                style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size:16px; color:#020202; line-height: 22px;"
                            >
                                Configurando tu Portal de Empresa en las próximas dos semanas.
                            </p>
                        </td>
                    </tr>



                    <!-------------------------Footer-------------------------------->
                    <!-------------------------Footer-------------------------------->
                    <!-------------------------Footer-------------------------------->
                    <tr class="back-color-footer" align="center">
                        <td style="padding-bottom: 20px;" align="center" valign="middle">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                    <tr align="center" style="height:80px ">
                                        <td style="width: 33%;">
                                            <a href="https://example.com"
                                                target="_blank">
                                                <img
                                                    src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png"
                                                    alt="Mail Builder Logo"
                                                    width="130"
                                                    height="auto"
                                                    border="0"
                                                    style="display:block"
                                                />
                                            </a>
                                        </td>
                                        <td style="width: 33%;">
                                            <a
                                                href="https://example.com"
                                                target="_blank">
                                                <img
                                                    src="https://html-email-builder.pages.dev/images/others/other-3.png"
                                                    alt="Snow. Solicita nuestros servicios y herramientas a través de ServiceNow"
                                                    width="200"
                                                    height="auto"
                                                    border="0"
                                                    style="display:block"
                                                />
                                            </a>
                                        </td>
                                        <td style="width: 33%;">
                                            &nbsp;&nbsp;&nbsp;
                                            <a 
                                            href="https://example.com"
                                            target="_blank">
                                                <img
                                                    src="https://html-email-builder.pages.dev/images/icons/icon-shield.png"
                                                    alt="Facebook Icon"
                                                    width="auto"
                                                    height="10px"
                                                    border="0"
                                                />
                                            </a>
                                            &nbsp;
                                            <a 
                                            href="https://example.com"
                                            target="_blank">
                                                <img
                                                    src="https://html-email-builder.pages.dev/images/icons/icon-shield.png"
                                                    alt="Twitter Icon"
                                                    width="auto"
                                                    height="10px"
                                                    border="0"
                                                />
                                            </a>
                                            &nbsp;
                                            <a 
                                            href="https://example.com"
                                            target="_blank">
                                                <img
                                                    src="https://html-email-builder.pages.dev/images/icons/icon-shield.png"
                                                    alt="Linkedin Icon"
                                                    width="auto"
                                                    height="10px"
                                                    border="0"
                                                />
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    <!--/100% body table-->
</body>

</html>
`
},

{
    id: 3,
    name: '03. MFA Largo',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-3.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>TIC INFORMA</title>
    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            margin: 0 auto !important;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            height: 100% !important;
            width: 100% !important;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode:bicubic;
            border: none;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }


        .margin-0                       { margin: 0 !important; }

        .padding-smaller                { padding: 5px !important; }
        .padding-small                  { padding: 10px !important; }
        .padding-normal                 { padding: 20px !important; }
        .padding-big                    { padding: 30px !important; }

        .padding-x-normal               { padding-left: 20px !important; padding-right: 20px !important; }
        .padding-x-big                  { padding-left: 30px !important; padding-right: 30px !important; }

        .bg-color-general               { background-color: #E1E1E1 !important; }
        .bg-color-normal                { background-color: #ffffff !important; }
        .bg-color-alt                   { background-color: #f1f4f4 !important; }
        .bg-color-footer                { background-color: #000000 !important; }
        .bg-color-test                  { background-color: #b11818 !important; }
    </style>
</head>

<body width="100%" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0" style="margin: 0; padding: 0; mso-line-height-rule: exactly;" class="bg-color-general">

    <!--email container-->
    <table role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" width="600" class="bg-color-normal">

        <!-------------------------Header-------------------------------->
        <!-------------------------Header-------------------------------->
        <!-------------------------Header-------------------------------->
        <tr class="bg-color-normal" align="center">
            <td class="padding-normal" align="center" valign="middle">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tbody>
                        <tr>
                            <!--Logo-->
                            <td style="width: 33%;" align="left" valign="middle">
                                <a 
                                    href="https://example.com"
                                    target="_blank">
                                        <img
                                            src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png"
                                            alt="logo mail builder"
                                            width="130" height="56" alt="Mail Builder" border="0"
                                            style="display:block; margin: 0 !important;"
                                        />
                                </a>
                            </td>
                            <!--Mensaje-->
                            <td style="width: 67%;" align="right" valign="middle">
                                <p  
                                    style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 22px; font-weight:bolder; color:#A6A9A9; letter-spacing: 5px;"
                                >
                                TIC INFORMA
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>


        <!-------------------------Image-------------------------------->
        <!-------------------------Image-------------------------------->
        <!-------------------------Image-------------------------------->
        <tr class="bg-color-alt" align="center">
            <td align="center" valign="middle">
                <img
                    src="https://html-email-builder.pages.dev/images/headers/header-security-0.png"
                    alt="portada"
                    width="100%"
                    height="auto"
                />
            </td>
        </tr>


<!-- space --><tr class="bg-color-alt"><td class="padding-normal"></td></tr><!-- space -->


        <!-------------------------Paragraph-------------------------------->
        <!-------------------------Paragraph-------------------------------->
        <!-------------------------Paragraph-------------------------------->
        <tr class="bg-color-alt" align="center">
            <td class="padding-x-big" align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                    En <span style="color:red">MAIL BUILDER</span> estamos comprometidos con la seguridad de la información. Por eso, muy pronto vamos a activar un mecanismo de seguridad adicional que evite accesos inapropiados a nuestros documentos y aplicaciones:
                    <br> 
                    <b>el Doble Factor de Autenticación.</b>
                </p>
            </td>
        </tr>


<!-- space --><tr class="bg-color-alt"><td class="padding-normal"></td></tr><!-- space -->
<!-- space --><tr class="bg-color-normal"><td class="padding-normal"></td></tr><!-- space -->


        <!-------------------------Image-------------------------------->
        <!-------------------------Image-------------------------------->
        <!-------------------------Image-------------------------------->
        <tr class="bg-color-normal" align="center">
            <td align="center" valign="middle">
                <img
                    src="https://html-email-builder.pages.dev/images/icons/icon-shield.png"
                    alt="portada"
                    width="auto"
                    height="100%"
                />
            </td>
        </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-smaller"></td></tr><!-- space -->


        <!-------------------------Title-------------------------------->
        <!-------------------------Title-------------------------------->
        <!-------------------------Title-------------------------------->
        <tr class="bg-color-normal" align="center">
            <td class="padding-x-big" align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 25px; font-weight: bolder; color:#020202; line-height: 22px;">
                    ¿Qué es la doble autenticación?
                </p>
            </td>
        </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-smaller"></td></tr><!-- space -->


        <!-------------------------Paragraph-------------------------------->
        <!-------------------------Paragraph-------------------------------->
        <!-------------------------Paragraph-------------------------------->
        <tr class="bg-color-normal" align="center">
            <td class="padding-x-big" align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                    Es un nuevo mecanismo por el que deberás introducir un 
                    <b>PIN adicional,</b> además de tus habituales usuario y contraseña de empleado.
                    <br>
                    <br>
                    Con ellos, verificamos que eres realmente tú el que está intentando acceder a tu información corporativa, ya que serás el único que dispondrá del PIN.
                </p>
            </td>
        </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-normal"></td></tr><!-- space -->
<!-- space --><tr class="bg-color-alt"><td class="padding-normal"></td></tr><!-- space -->


        <!-------------------------Title-------------------------------->
        <!-------------------------Title-------------------------------->
        <!-------------------------Title-------------------------------->
        <tr class="bg-color-alt" align="center">
            <td class="padding-x-big" align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 25px; font-weight: bolder; color:#020202; line-height: 22px;">
                    ¿Cuándo aplica?
                </p>
            </td>
        </tr>


<!-- space --><tr class="bg-color-alt"><td class="padding-smaller"></td></tr><!-- space -->


        <!-------------------------Paragraph-------------------------------->
        <!-------------------------Paragraph-------------------------------->
        <!-------------------------Paragraph-------------------------------->
        <tr class="bg-color-alt" align="center">
            <td class="padding-x-big" align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                    La doble autenticación te será solicitada cuando te encuentres fuera de las oficinas de <span style="color:red">MAIL BUILDER</span> y quieras conectarte al entorno corporativo a través de las siguientes aplicaciones (progresivamente iremos incorporando otras).
                </p>
            </td>
        </tr>


<!-- space --><tr class="bg-color-alt"><td class="padding-smaller"></td></tr><!-- space -->


        <!-------------------------Image-------------------------------->
        <!-------------------------Image-------------------------------->
        <!-------------------------Image-------------------------------->
        <tr class="bg-color-alt" align="center">
            <td align="center" valign="middle">
                <img
                    src="https://html-email-builder.pages.dev/images/others/other-1.png"
                    alt="dispositivo personal"
                    width="100%"
                    height="auto"
                />
            </td>
        </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-normal"></td></tr><!-- space -->


        <!-------------------------Title-------------------------------->
        <!-------------------------Title-------------------------------->
        <!-------------------------Title-------------------------------->
        <tr class="bg-color-normal" align="center">
            <td class="padding-x-big" align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 25px; font-weight: bolder; color:#020202; line-height: 22px;">
                    ¿Cómo funciona?
                </p>
            </td>
        </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-small"></td></tr><!-- space -->


        <!-------------------------Paragraph-------------------------------->
        <!-------------------------Paragraph-------------------------------->
        <!-------------------------Paragraph-------------------------------->
        <tr class="bg-color-normal" align="center">
            <td class="padding-x-big" align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                    Elige el método que prefieras entre los siguientes:
                </p>
            </td>
        </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-small"></td></tr><!-- space -->


        <!-------------------------Triple Column-------------------------------->
        <!-------------------------Triple Column-------------------------------->
        <!-------------------------Triple Column-------------------------------->
        <!-- Change the width in every <td> to make it double or whatever -->
        <tr class="bg-color-normal" align="center">
            <td class="padding-x-normal" align="center" valign="middle">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr align="center" valign="top" style="height:80px">
                            <td style="width: 33%; padding: 5px 0;">
                                <img src="https://html-email-builder.pages.dev/images/icons/icon-lock.png" alt="Icono autenticacion">
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size:14px; font-weight: bolder;color:#020202; line-height: 22px; padding: 10px 0;"
                                >
                                    App Microsoft Authenticator
                                </p>
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size:16px; color:#020202; line-height: 22px;"
                                >
                                    Descárgala y configura tu perfil para recibir el PIN en la aplicación (recomendado)
                                </p>
                            </td>
                            <td style="width: 33%; padding: 5px;">
                                <img src="https://html-email-builder.pages.dev/images/icons/icon-phone.png" alt="Icono sms">
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size:16px; font-weight: bolder;color:#020202; line-height: 22px; padding: 10px 0;"
                                >
                                    SMS
                                </p>
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size:16px; color:#020202; line-height: 22px;"
                                >
                                    Recibe el PIN a través de un mensaje de texto
                                </p>
                            </td>
                            <td style="width: 33%; padding: 5px;">
                                <img src="https://html-email-builder.pages.dev/images/icons/icon-phone.png" alt="Icono llamada">
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size:16px; font-weight: bolder;color:#020202; line-height: 22px; padding: 10px 0;"
                                >
                                    Llamada
                                </p>
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size:16px; color:#020202; line-height: 22px;"
                                >
                                    Confirma tu identidad contestando una llamada
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>


        <!-------------------------Border-------------------------------->
        <!-------------------------Border-------------------------------->
        <!-------------------------Border-------------------------------->
        <tr class="bg-color-normal" align="center">
            <td class="padding-big" align="center" valign="middle">
                <table
                    style="border-top: 1px solid #999;"
                    width="100%"
                    role="presentation" cellspacing="0" cellpadding="0">
                </table>
            </td>
        </tr>


        <!-------------------------Paragraph-------------------------------->
        <!-------------------------Paragraph-------------------------------->
        <!-------------------------Paragraph-------------------------------->
        <tr class="bg-color-normal" align="center">
            <td class="padding-x-big" align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                    Puedes modificarlo en todo momento en
                    <br>
                    <a href="https://example.com"><span style="font-weight:bold; text-decoration:underline;color:red;">
                        https://example.com</span>
                    </a>
                </p>
            </td>
        </tr>


        <!-------------------------Border-------------------------------->
        <!-------------------------Border-------------------------------->
        <!-------------------------Border-------------------------------->
        <tr class="bg-color-normal" align="center">
            <td class="padding-big" align="center" valign="middle">
                <table
                    style="border-top: 1px solid #999;"
                    width="100%"
                    role="presentation" cellspacing="0" cellpadding="0">
                </table>
            </td>
        </tr>


        <!-------------------------Paragraph-------------------------------->
        <!-------------------------Paragraph-------------------------------->
        <!-------------------------Paragraph-------------------------------->
        <tr class="bg-color-normal" align="center">
            <td class="padding-x-big" align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                    De este modo, cuando quieras acceder al entorno corporativo fuera de la oficina, sólo tendrás que confirmar tu identidad con el método elegido y podrás acceder a todas tus aplicaciones y documentos, sin importar dónde te encuentres.
                </p>
            </td>
        </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-small"></td></tr><!-- space -->


        <!-------------------------1 Image buttons-------------------------------->
        <!-------------------------1 Image buttons-------------------------------->
        <!-------------------------1 Image buttons-------------------------------->
        <tr class="back-color-normal" align="center">
            <td class="padding-x-big" align="center" valign="middle">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                    <tr>
                        <td align="center">
                            <a 
                            href="https://example.com"
                            target="_blank">
                                <img
                                    src="https://html-email-builder.pages.dev/images/icons/icon-video.png"
                                    width="auto"
                                    height="43px"
                                />
                            </a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>



<!-- space --><tr class="bg-color-normal"><td class="padding-normal"></td></tr><!-- space -->


        <!-------------------------Paragraph-------------------------------->
        <!-------------------------Paragraph-------------------------------->
        <!-------------------------Paragraph-------------------------------->
        <tr class="bg-color-normal" align="left">
            <td class="padding-x-big" align="left" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 12px; color:#7c7c7c; line-height: 16px;">
                    <span style="color: #424242; font-weight: bold; text-decoration: none;">Información sobre privacidad</span>
                    <br><br>
                    En cumplimiento del Reglamento UE 2016/679 de Protección de Datos y demás normativa vigente, se le informa que sus datos de carácter personal serán tratados por la compañía del Grupo MAIL BUILDER para la cual el interesado presta sus servicios y cuyos datos se pueden consultar en la memoria de las últimas <a href="https://example.com"><span style="color: #424242; font-weight: bold; text-decoration: underline;">cuentas anuales</span></a> consolidadas de MAIL BUILDER, o bien en el documento contractual que les une. No obstante, Mail Builder, S.A., también actúa como encargada del tratamiento y se puede dirigir a la misma para este tratamiento mediante los siguientes datos:
                    <br>
                    <b>CIF:</b> A08001851, Avda. Europa 18, Parque Empresarial La Moraleja, 28108 Alcobendas (Madrid).
                    <b>Tel:</b> (+34) 91 6632850. <b>Correo electrónico:</b> <a href="mailto:newsletter@example.com"><span style="color: #424242; font-weight: bold; text-decoration: underline;">newsletter@example.com</span></a>
                    <br><br>
                    Sus datos serán tratados únicamente con la finalidad de verificar su identidad en el procedimiento de autenticación en las aplicaciones de MAIL BUILDER. La base jurídica del tratamiento es el interés legítimo (artículo 6.1.f) RGPD) de la compañía en asegurar sus infraestructuras y su información, así como ser un tratamiento necesario para la ejecución de la relación laboral (artículo 6.1.b) RGPD). La información proporcionada y/o solicitada tiene carácter obligatorio y es la estrictamente necesaria para cumplir con las finalidades mencionadas. Los datos se conservarán mientras dure la relación laboral, los plazos de prescripción legal de aplicación y mientras no se solicite su supresión. MAIL BUILDER le informa que no está prevista ninguna cesión ni ninguna transferencia internacional.
                    <br><br>
                    Podrá ejercitar sus derechos de acceso, rectificación, supresión y portabilidad de sus datos, de limitación y oposición a su tratamiento, ante Mail Builder, S.A., dirigiéndose por escrito al Departamento de Protección de Datos, en Avenida de Europa, número 18, Parque Empresarial La Moraleja, 28108 de Alcobendas (Madrid), o mediante el envío de un correo electrónico a la siguiente dirección: <a href="mailto:people.privacy@example.com"><span style="color: #424242; font-weight: bold; text-decoration: underline;">people.privacy@example.com</span></a>, adjuntando copia de DNI u otro documento identificativo. Asimismo, podrá en cualquier momento, retirar el consentimiento prestado dirigiéndose a la dirección arriba indicada, así como reclamar ante la Autoridad de Control (<a href="www.aepd.es"><span style="color: #424242; font-weight: bold; text-decoration: underline;">Agencia Española de Protección de Datos</span></a>).
                    <br><br>
                    Para más información, puede consultar <a href="https://example.com"><span style="color: #424242; font-weight: bold; text-decoration: underline;">https://example.com</span></a>.
                </p>
            </td>
        </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-normal"></td></tr><!-- space -->


        <!-------------------------Footer-------------------------------->
        <!-------------------------Footer-------------------------------->
        <!-------------------------Footer-------------------------------->
        <tr class="bg-color-footer" align="center">
            <td class="padding-normal" valign="middle">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tbody>
                        <tr align="left">
                            <td style="width: 25%;" valign="top">
                                <a  href="https://example.com"
                                    target="_blank"
                                    style="display:block;"
                                    >
                                    <img
                                        src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png"
                                        alt="Mail Builder Logo"
                                        width="130px"
                                        height="auto"
                                        border="0"
                                    />
                                </a>
                            </td>

                            <td style="width: 60%;" valign="top">

                            </td>

                            <td style="width: 10%; padding-top: 18px !important;" valign="top">
                                <a 
                                    href="https://example.com"
                                    target="_blank"
                                    >
                                    <img
                                        src="https://html-email-builder.pages.dev/images/icons/icon-shield.png"
                                        alt="Facebook Icon"
                                        width="auto"
                                        height="10px"
                                        border="0"
                                    />
                                </a>
                                &nbsp;
                                <a 
                                    href="https://example.com"
                                    target="_blank"
                                    >
                                    <img
                                        src="https://html-email-builder.pages.dev/images/icons/icon-shield.png"
                                        alt="Twitter Icon"
                                        width="auto"
                                        height="10px"
                                        border="0"
                                    />
                                </a>
                                &nbsp;
                                <a 
                                    href="https://example.com"
                                    target="_blank"
                                    >
                                    <img
                                        src="https://html-email-builder.pages.dev/images/icons/icon-shield.png"
                                        alt="Linkedin Icon"
                                        width="auto"
                                        height="10px"
                                        border="0"
                                    />
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>  <!-- end footer -->
    </table>
    <!-- end email container -->
</body>

</html>
`
},

{
    id: 4,
    name: '04. Canales Soporte Australia',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-4.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Phones</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            mso-line-height-rule: exactly;
        }
        
        * {
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 600px;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt0                  { background-color: #e8eaea; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }
    </style>


</head>

<body class="bg-color-general" style="margin: 0 auto; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
    <table width="600" class="container600" style="margin: 0 auto; max-width: 600px;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-general">
    <td width="600" style="text-align: center;">
    
    <!--email container-->
    <table width="600" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">

        <!-------------------------Header-------------------------------->
        <tr bgcolor="#ffffff" align="center">
            <td style="padding: 4px 30px 0 30px;" align="center" valign="middle">
                <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td height="80" align="left" valign="middle">
                                <a href="https://example.com" target="_blank">
                                    <img src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="Mail Builder" width="auto" height="53" border="0">
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        
                    
                    
                    
        <!-------------------------Imagen-------------------------------->
        <tr bgcolor="#e8eaea" align="center">
            <td align="center" valign="middle">
                <img
                    src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png"
                    alt="portada"
                    width="600" height="auto"
                    style="display: block;"
                >
            </td>
        </tr>
        
                    
                    
                    
        <!-------------------------Border-------------------------------->
        <!-- <tr bgcolor="#ffffff" align="center">
            <td style="padding: 0;" align="center" valign="middle">
                <table
                    style="border-bottom: 2px solid #ffffff;"
                    width="600"
                    role="presentation" cellspacing="0" cellpadding="0">
                </table>
            </td>
        </tr> -->
        <!-------------------------Titular-------------------------------->
        <tr bgcolor="#FF0000" align="center">
            <td style="padding: 20px 0px 20px 0px;" align="center" valign="middle">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td align="center" valign="middle">
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 26px; font-weight: bold; line-height: 30px; color:#FFFFFF; margin: 0; letter-spacing: 1px;">
                                    WE REMIND YOU OF THE ICT SUPPORT CHANNELS
                                    <br>
                                    AVAILABLE IN AUSTRALIA
                                </p>
                            </td>
                        </tr>
                    </tbody>
                    </table>
            </td>
        </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-normal"></td></tr><!-- space -->


        <!-------------------------Paragraph-------------------------------->
        <!-------------------------Paragraph-------------------------------->
        <!-------------------------Paragraph-------------------------------->
        <tr class="bg-color-normal" align="center">
            <td class="padding-x-big" align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                    <span style="color:#ff0000;">MAIL BUILDER</span> offers you <b>two ICT support channels</b> to give you an optimum service when it comes to solving technical incidents and providing you with the requested ICT services.
                </p>
            </td>
        </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-normal"></td></tr><!-- space -->



<!-------------------------Triple Column Banner-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr valign="top" align="left">
                    <td width="80" height="80" valign="middle">
                        <img src="https://html-email-builder.pages.dev/images/icons/icon-info.png" style="display: block;" alt="number" width="80" height="80">
                    </td>
                    <td width="170" height="80" valign="middle">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 28px; font-weight: normal; color:#020202; line-height: 22px;">
                            &nbsp;&nbsp;&nbsp;Service<b>Now</b>
                        </p>
                    </td>
                    <td width="350" height="80" valign="middle">
                        <img src="https://html-email-builder.pages.dev/images/icons/icon-info.png" alt="cover" style="display: block;" width="350" height="80">
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>



        <!-------------------------Double Column-------------------------------->
        <!-------------------------Double Column-------------------------------->
        <!-------------------------Double Column-------------------------------->
        <!-- Change the width in every <td> to make it triple or whatever -->
        <!-- <tr class="bg-color-alt" align="center">
            <td align="center" valign="middle">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr valign="top" align="left">
                            <td style="width: 15%; padding: 0;">
                                <img style="display: block;" src="https://html-email-builder.pages.dev/images/icons/icon-info.png" alt="Icono autenticacion" width="100%" height="100%">
                            </td>
                            <td valign="middle" style="width: 20%; padding: 20px;">
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 28px; color:#020202; line-height: 22px;">
                                    Service<b>Now</b>
                                </p>
                            </td>
                            <td valign="middle" style="width: 65%; padding: 0;">
                                <img style="display: block;" src="https://html-email-builder.pages.dev/images/icons/icon-info.png" alt="Icono autenticacion" width="100%" height="100%">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr> -->

        <tr bgcolor="#ffffff" align="center">
            <td align="center" valign="middle">
                <img
                    src="https://html-email-builder.pages.dev/images/others/other-6.png"
                    alt="portada"
                    width="600" height="auto"
                    style="display: block;"
                >
            </td>
        </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-smaller"></td></tr><!-- space -->


        <!-------------------------Paragraph-------------------------------->
        <!-------------------------Paragraph-------------------------------->
        <!-------------------------Paragraph-------------------------------->
        <tr class="bg-color-normal" align="center">
            <td class="padding-x-big" align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                    Remember that through your ICT Services Tool <b>ServiceNow,</b> you will be able to:
                </p>
            </td>
        </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-smaller"></td></tr><!-- space -->


        <!-------------------------Triple Column-------------------------------->
        <!-------------------------Triple Column-------------------------------->
        <!-------------------------Triple Column-------------------------------->
        <!-- Change the width in every <td> to make it double or whatever -->
        <tr class="bg-color-normal" align="center">
            <td class="padding-x-normal" align="center" valign="middle">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr align="center" valign="top" style="height:80px">
                            <td style="width: 33%; padding: 5px;">
                                <img src="https://html-email-builder.pages.dev/images/others/other-6.png" alt="Icono autenticacion">
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size:16px; font-weight: bolder;color:#020202; line-height: 22px; padding: 10px 0;"
                                >
                                    Request
                                </p>
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size:16px; color:#020202; line-height: 22px;"
                                >
                                    <b>Request</b> Pcs, applications, passwords, etc. and manage previously opened requests.
                                </p>
                            </td>
                            <td style="width: 33%; padding: 5px;">
                                <img src="https://html-email-builder.pages.dev/images/others/other-4.png" alt="Icono sms">
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size:16px; font-weight: bolder;color:#020202; line-height: 22px; padding: 10px 0;"
                                >
                                    Approve
                                </p>
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size:16px; color:#020202; line-height: 22px;"
                                >
                                    Manage your <b>approvals and delegations.</b>
                                </p>
                            </td>
                            <td style="width: 33%; padding: 5px;">
                                <img src="https://html-email-builder.pages.dev/images/others/other-3.png" alt="Icono llamada">
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size:16px; font-weight: bolder;color:#020202; line-height: 22px; padding: 10px 0;"
                                >
                                    Report
                                </p>
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size:16px; color:#020202; line-height: 22px;"
                                >
                                    Report incidents and manage previously opened incidents.
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-normal"></td></tr><!-- space -->


        <!-------------------------Title-------------------------------->
        <!-------------------------Title-------------------------------->
        <!-------------------------Title-------------------------------->
        <tr class="bg-color-normal" align="center">
            <td class="padding-x-big" align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 25px; font-weight: bolder; color:#020202; line-height: 22px;">
                    Learn how to get the most out of ServiceNow!
                </p>
            </td>
        </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-small"></td></tr><!-- space -->



<!-------------------------Primary Button-------------------------------->
<!--  Define width, height and bgcolor in TD attributes. 
TD height and color should be equal to A line-height and color.
Border radius probably won't work but it won't hurt either. -->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 10px 20px 5px 20px;" align="center" valign="middle">
        <table style="-webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
        <tbody>
            <tr> 
                <td width="230" height="45" bgcolor="#ff0000" align="center" style="color: #ffffff; border: 3px solid #ff0000; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; text-decoration: none; display: block; letter-spacing: 3px;">
                    <a href="https://example.com"
                    style="line-height: 39px; color: #ffffff; background-color: #ff0000; font-size: 15px; font-weight: normal; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width:100%; display:inline-block; letter-spacing: 3px;">
                        WATCH THE VIDEO
                    </a>
                </td> 
            </tr>
        </tbody>
        </table>
    </td>
</tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-normal"></td></tr><!-- space -->



<!-------------------------Triple Column Banner-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr valign="top" align="left">
                    <td width="80" height="80" valign="middle">
                        <img src="https://html-email-builder.pages.dev/images/icons/icon-info.png" style="display: block;" alt="number" width="80" height="80">
                    </td>
                    <td width="170" height="80" valign="middle">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 28px; font-weight: normal; color:#020202; line-height: 22px;">
                            &nbsp;&nbsp;&nbsp;Service <b>Desk</b>
                        </p>
                    </td>
                    <td width="350" height="80" valign="middle">
                        <img src="https://html-email-builder.pages.dev/images/icons/icon-info.png" alt="cover" style="display: block;" width="350" height="80">
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>

        <!-------------------------Double Column-------------------------------->
        <!-------------------------Double Column-------------------------------->
        <!-------------------------Double Column-------------------------------->
        <!-- Change the width in every <td> to make it triple or whatever -->
            <!-- <tr class="bg-color-alt" align="center">
                <td align="center" valign="middle">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr valign="top" align="left">
                                <td style="width: 15%; padding: 0;">
                                    <img style="display: block;" src="https://html-email-builder.pages.dev/images/icons/icon-info.png" alt="Icono autenticacion" width="100%" height="100%">
                                </td>
                                <td valign="middle" style="width: 20%; padding: 20px;">
                                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 28px; color:#020202; line-height: 22px;white-space: nowrap;">
                                        Service <b>Desk</b>
                                    </p>
                                </td>
                                <td valign="middle" style="width: 65%; padding: 0;">
                                    <img style="display: block;" src="https://html-email-builder.pages.dev/images/icons/icon-info.png" alt="Icono autenticacion" width="100%" height="100%">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr> -->

            <tr bgcolor="#f1f4f4" align="center">
                <td align="center" valign="middle">
                    <img
                        src="https://html-email-builder.pages.dev/images/others/other-6.png"
                        alt="portada"
                        width="600" height="auto"
                        style="display: block;"
                    >
                </td>
            </tr>


        <!-------------------------Double Column-------------------------------->
        <!-------------------------Double Column-------------------------------->
        <!-------------------------Double Column-------------------------------->
        <!-- Change the width in every <td> to make it triple or whatever -->
        <tr class="bg-color-alt" align="center">
            <td align="center" valign="middle">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr valign="top" align="left">
                            <td style="width: 45%; padding: 20px; height:100%;" height="100%">
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                                    In case you cannot register the ticket through ServiceNow, you can now contact Service Desk as an alternative support channel.
                                </p>
                            </td>
                            <td style="width: 65%; padding: 20px;">
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 30px;">
                                    <span style="font-weight: bold; color: #ff0000;">24/7</span> in English and Spanish
                                    <br>
                                    <span style="font-weight: bold; color: #ff0000;">Email: </span><a href="mailto:servicedesk@example.com">servicedesk@example.com</a>
                                    <br>
                                    <span style="font-weight: bold; color: #ff0000;">Tel:</span> +61 3 9624 4236
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>


<!-- -----------------------Footer Version 3 - Español------------------------------ -->
<tr class="bg-color-footer" align="center">
    <td style="padding: 0 30px;" align="center" valign="middle">
        <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td height="80" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <!-- <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="auto" border="0"> -->
                            <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="auto" border="0">
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>



    <!-- -----------------------Ruta online mail builder---------------------->
    <!-- https://html-email-builder.pages.dev/images/others/other-5.png -->
    
    
    <!-- -----------------------Ruta local ---------------------->
    <!-- ./img/ -->
    
    
    <!-- -----------------------Link con estilo ---------------------->
    <!-- <a href="mailto:windows10upgrades@example.com">
        <span style="color: #ff0000; font-weight: bold; text-decoration: underline;">windows10upgrades@example.com</span>
    </a> -->
    
    <!-- -----------------------Nueva linea ---------------------->
    <!-- <br> -->
    
    
    <!-- -----------------------Texto en Negrita---------------------->
    <!-- <b>Texto en negrita</b> -->
    
    
    <!-- -----------------------Texto en Color---------------------->
    <!-- <span style="color: #ff0000;">windows10upgrades@example.com</span> -->
    
    
    
    <!-- -----------------------Espacio entre bloques---------------------->
    <!-- <tr style="background-color: #ffffff"><td><p style="line-height: 40px;">&nbsp;</p></td></tr> -->
    
    </table>
    <!-- end email container -->
    
    
    </td>
    </tr>
    </table>
    
    
    </center>
    
    
    
    
    
    </body>
    </html>
    
`
},

{
    id: 9,
    name: '09. Uso Responsable VPN',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-9.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Uso Responsable VPN</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            max-width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 100%;
            }
        }


        .margin-0                       { margin: 0 !important; }

        .padding-smaller                { padding: 5px !important; }
        .padding-small                  { padding: 10px !important; }
        .padding-normal                 { padding: 20px !important; }
        .padding-big                    { padding: 30px !important; }

        .padding-x-normal               { padding-left: 20px !important; padding-right: 20px !important; }
        .padding-x-big                  { padding-left: 30px !important; padding-right: 30px !important; }

        .bg-color-general               { background-color: #E1E1E1 !important; }
        .bg-color-normal                { background-color: #ffffff !important; }
        .bg-color-alt                   { background-color: #f1f4f4 !important; }
        .bg-color-footer                { background-color: #000000 !important; }
        .bg-color-test                  { background-color: #7d0000 !important; }

        /*Gradient background*/
        .bg-gradient {
            background: -moz-linear-gradient(top, #ff0000 0%, #5f0000 100%); /* FF3.6-15 */
            background: -webkit-linear-gradient(top, #ff0000 0%, #5f0000 100%); /* Chrome10-25,Safari5.1-6 */
            background: linear-gradient(to bottom, #ff0000 0%, #5f0000 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            background: -ms-linear-gradient(top, #ff0000 0%, #5f0000 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff0000', endColorstr='#5f0000', GradientType=0 ); /* IE6-9; */
        }
    </style>
</head>

<body class="bg-color-general" style="margin: 0; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
<table width="600" class="container600" style="width: 600px;margin: 0 auto;" role="presentation" cellpadding="0" cellspacing="0">
<tr class="bg-color-general">
<td width="100%" style="width: 100%; text-align: left;">

<!--email container-->
<table width="100%" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">

    <!-------------------------Header-------------------------------->
    <!-------------------------Header-------------------------------->
    <!-------------------------Header-------------------------------->
    <tr class="bg-color-normal" align="center">
        <td style="padding: 20px 30px;" align="center" valign="middle">
            <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                    <td style="width: 33%;" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="logo mail builder"
                                width="auto" height="56" border="0">
                        </a>
                    </td>
                    
                </tr>
            </table>
        </td>
    </tr>


    <tr>
        <td class="br-gradient" valign="top" height="200" style="width:600px; height:200px; background: linear-gradient(to bottom, #ff0000 0%, #5f0000 100%); background-repeat:no-repeat; background-position:center;">
            <!--[if gte mso 9]>
                <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" 
                style="display: inline-block; position: absolute; width: 600px; height: 200px; top: 0; left: 0; border: 0; z-index: 2;">
                <v:fill type=gradient color2="#ff0000" color="#5f0000" opacity2="0%" opacity="100%" />
                <div>
            <![endif]-->

            <!-- Containing Table -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr align="center">
                    <td class="" height="190" align="center" valign="middle" style="height:190px;">
                        <img src="https://html-email-builder.pages.dev/images/others/other-5.png" alt="logo mail builder"
                        width="auto" height="auto" border="0">
                        &nbsp;
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 25px; font-weight: bolder; color:#ffffff;">
                            Acceso VPN:
                            <br>
                            ¡Hagamos un uso responsable!
                        </p>
                    </td>
                </tr>
            </table>
            <!-- Containing Table END-->

            <!--[if gte mso 9]>   
            </div></v:fill></v:rect><![endif]--> 
        </td>
    </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-small"></td></tr><!-- space -->


    <!-------------------------Paragraph-------------------------------->
    <!-------------------------Paragraph-------------------------------->
    <!-------------------------Paragraph-------------------------------->
    <tr class="bg-color-normal" align="center">
        <td class="padding-x-big" align="center" valign="middle">
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                Para garantizar el acceso de todos a la VPN, queremos pedirte que hagas un uso responsable del mismo.
            </p>
        </td>
    </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-normal"></td></tr><!-- space -->


    <!-------------------------Border-------------------------------->
    <!-------------------------Border-------------------------------->
    <!-------------------------Border-------------------------------->
    <tr class="bg-color-normal" align="center">
        <td align="center" valign="middle">
            <table
                style="border-top: 1px solid #A6A9A9;"
                width="8%"
                role="presentation" cellspacing="0" cellpadding="0">
            </table>
        </td>
    </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-small"></td></tr><!-- space -->

    
    <!-------------------------Title-------------------------------->
    <!-------------------------Title-------------------------------->
    <!-------------------------Title-------------------------------->
    <tr class="bg-color-normal" align="center">
        <td class="padding-x-big" align="center" valign="middle">
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 25px; font-weight: bolder; color:#020202;">
                ¿Cuándo necesito conectarme a la VPN?
            </p>
        </td>
    </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-small"></td></tr><!-- space -->


    <!-------------------------Double Column-------------------------------->
    <!-------------------------Double Column-------------------------------->
    <!-------------------------Double Column-------------------------------->
    <!-- Change the width in every <td> to make it triple or whatever -->
    <tr class="bg-color-alt" align="center">
        <td align="center" valign="middle">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr valign="top" align="left">
                    <td style="width: 19%; padding: 0 !important;">
                        <img style="display: block !important;" src="https://html-email-builder.pages.dev/images/icons/icon-globe.png" alt="Numero 1" width="auto" height="99">
                    </td>
                    <td valign="middle" style="width: 71%; padding-right: 15px;">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                            <b>NO necesitas conectarte a la VPN</b> para acceder a tu correo electrónico, Office (Word, Excel, Power Point), Teams, Skype o Onedrive.
                        </p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>


<!-- space --><tr class="bg-color-normal"><td style="padding: 2px;"></td></tr><!-- space -->


<!-------------------------Double Column-------------------------------->
<!-------------------------Double Column-------------------------------->
<!-------------------------Double Column-------------------------------->
<!-- Change the width in every <td> to make it triple or whatever -->
    <tr class="bg-color-alt" align="center">
        <td align="center" valign="middle">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr valign="top" align="left">
                    <td style="width: 19%; padding: 0 !important;">
                        <img style="display: block !important;" src="https://html-email-builder.pages.dev/images/icons/icon-globe.png" alt="Numero 1" width="auto" height="99">
                    </td>
                    <td valign="middle" style="width: 71%; padding-right: 15px;">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                            <b>SÍ necesitas conectarte a la VPN</b> para acceder a servicios como SAP, carpetas compartidas u otras aplicaciones de negocio.
                        </p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-normal"></td></tr><!-- space -->


    <!-------------------------Paragraph-------------------------------->
    <!-------------------------Paragraph-------------------------------->
    <!-------------------------Paragraph-------------------------------->
    <tr class="bg-color-normal" align="center">
        <td class="padding-x-big" align="center" valign="middle">
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                Por favor, <b>haz un uso responsable de la VPN</b> conectándote a ella sólo cuando utilices este último tipo de aplicaciones. El resto del tiempo, deberás desconectarte. Para ello, sólo tendrás que volver al semáforo y, con el botón derecho, elegir "Disconnect".
            </p>
        </td>
    </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-small"></td></tr><!-- space -->
<!-- space --><tr class="bg-color-alt"><td class="padding-small"></td></tr><!-- space -->


    <!-------------------------Paragraph-------------------------------->
    <!-------------------------Paragraph-------------------------------->
    <!-------------------------Paragraph-------------------------------->
    <tr class="bg-color-alt" align="center">
        <td class="padding-x-big" align="center" valign="middle">
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                Si no ves el semáforo en la barra inferior, arrástralo para tenerlo más visible.
            </p>
        </td>
    </tr>


<!-- space --><tr class="bg-color-alt"><td class="padding-small"></td></tr><!-- space -->

    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <tr class="bg-color-alt" align="center">
        <td align="center" valign="middle">
            <img
                src="https://html-email-builder.pages.dev/images/others/other-3.png" alt="portada"
                width="50%" height="auto"
            >
        </td>
    </tr>


<!-- space --><tr class="bg-color-alt"><td class="padding-normal"></td></tr><!-- space -->
<!-- space --><tr class="bg-color-normal"><td class="padding-normal"></td></tr><!-- space -->

    
    <!-------------------------Title-------------------------------->
    <!-------------------------Title-------------------------------->
    <!-------------------------Title-------------------------------->
    <tr class="bg-color-normal" align="center">
        <td class="padding-x-big" align="center" valign="middle">
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 25px; font-weight: bolder; color:#020202;">
                ¿Tienes algún problema de conexión?
                <br>
                Contacta con Service Desk:
            </p>
        </td>
    </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-small"></td></tr><!-- space -->


<!-------------------------Double Column-------------------------------->
<!-------------------------Double Column-------------------------------->
<!-------------------------Double Column-------------------------------->
<!-- Change the width in every <td> to make it triple or whatever -->
    <tr class="bg-color-alt" align="center">
        <td align="center" valign="middle">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr valign="top" align="left">
                    <td style="width: 19%; padding: 0 !important;">
                        <img style="display: block !important;" src="https://html-email-builder.pages.dev/images/icons/icon-globe.png" alt="Numero 1" width="auto" height="99">
                    </td>
                    <td valign="middle" style="width: 71%; padding-right: 15px;">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                            A través de la herramienta de tickets de Servicios TIC <a href="https://example.com"><b>ServiceNow</b></a>.
                            <br>
                            Enviando un email a <a href="mailto:servicedesk@example.com"><span style="font-weight: bold; color: #ff0000;text-decoration: underline;">servicedesk@example.com</span></a>
                            <br>
                            O llamando al <b>900 000 000</b>
                        </p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-normal"></td></tr><!-- space -->


    <!-------------------------Footer-------------------------------->
    <!-------------------------Footer-------------------------------->
    <!-------------------------Footer-------------------------------->
    <tr class="bg-color-footer" align="center">
        <td style="padding: 20px 30px;" align="center" valign="middle">
            <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                    <td style="width: 33%;" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Mail Builder Logo"
                                width="130px" height="auto" border="0">
                        </a>
                    </td>
                    <td style="width: 67%;" align="right" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/icons/icon-shield.png" alt="Facebook Icon"
                                width="auto" height="10px" border="0" style="display: inline-block;">
                        </a>
                        &nbsp;
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/icons/icon-shield.png" alt="Twitter Icon"
                                width="auto" height="10px" border="0" style="display: inline-block;">
                        </a>
                        &nbsp;
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/icons/icon-shield.png" alt="Linkedin Icon"
                                width="auto" height="10px" border="0" style="display: inline-block;">
                        </a>
                    </td>
                </tr>
            </table>
        </td>
    </tr>

</table>
<!-- end email container -->


</td>
</tr>
</table>


</center>

</body>

</html>
`
},

{
    id: 19,
    name: '19. Webinar Blue Jeans',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-19.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Cómo utilizar BlueJeans para tus reuniones virtuales</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            max-width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 100%;
            }
        }

        .margin-0                       { margin: 0 !important; }

        .padding-smallest               { padding: 5px !important; }
        .padding-smaller                { padding: 10px !important; }
        .padding-small                  { padding: 15px !important; }
        .padding-normal                 { padding: 20px !important; }
        .padding-big                    { padding: 25px !important; }
        .padding-bigger                 { padding: 30px !important; }

        .padding-x-smallest             { padding-left: 5px !important; padding-right: 5px !important; }
        .padding-x-smaller              { padding-left: 10px !important; padding-right: 10px !important; }
        .padding-x-small                { padding-left: 15px !important; padding-right: 15px !important; }
        .padding-x-normal               { padding-left: 20px !important; padding-right: 20px !important; }
        .padding-x-big                  { padding-left: 25px !important; padding-right: 25px !important; }
        .padding-x-bigger               { padding-left: 30px !important; padding-right: 30px !important; }

        .bg-color-general               { background-color: #E1E1E1 !important; }
        .bg-color-normal                { background-color: #ffffff !important; }
        .bg-color-alt                   { background-color: #f1f4f4 !important; }
        .bg-color-alt2                  { background-color: #EEEEF8 !important; }
        .bg-color-alt3                  { background-color: #DDDEF4 !important; }
        .bg-color-footer                { background-color: #000000 !important; }
        .bg-color-test                  { background-color: #b11818 !important; }
        .bg-color-blue1                 { background-color: #124FA8 !important; }
        .bg-color-blue2                 { background-color: #4C50C3 !important; }
        .bg-color-blue3                 { background-color: #1194E3 !important; }
    </style>
</head>

<body class="bg-color-general" style="margin: 0; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
<table width="600" class="container600" style="width: 600px;margin: 0 auto;" role="presentation" cellpadding="0" cellspacing="0">
<tr class="bg-color-general">
<td width="100%" style="width: 100%; text-align: left;">

<!--email container-->
<table width="100%" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">

    <!-------------------------Header-------------------------------->
    <!-------------------------Header-------------------------------->
    <!-------------------------Header-------------------------------->
    <tr class="bg-color-normal" align="center">
        <td style="padding: 20px 20px;" align="center" valign="middle">
            <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                    <td style="width: 33%;" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="logo mail builder"
                                width="auto" height="56" border="0">
                        </a>
                    </td>
                    <td style="width: 67%;" align="right" valign="middle">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 22px; font-weight: bolder; color:#A6A9A9; letter-spacing: 5px;">

                        </p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>


    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <tr class="bg-color-normal" align="center">
        <td align="center" valign="middle">
            <img
                src="https://html-email-builder.pages.dev/images/headers/header-teams-1.png" alt="portada"
                width="100%" height="auto"
            >
        </td>
    </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-smaller"></td></tr><!-- space -->
<!-- space --><tr class="bg-color-blue3"><td class="padding-small"></td></tr><!-- space -->


    <!-------------------------Title-------------------------------->
    <!-------------------------Title-------------------------------->
    <!-------------------------Title-------------------------------->
    <tr class="bg-color-blue3" align="center">
        <td class="padding-x-bigger" align="center" valign="middle">
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 30px; font-weight: bold; color:#ffffff
            ;">
                ¿Cómo conectarte a una reunión
                <br>
                con BlueJeans?
            </p>
        </td>
    </tr>


<!-- space --><tr class="bg-color-blue3"><td class="padding-smaller"></td></tr><!-- space -->


    <!-------------------------Paragraph-------------------------------->
    <!-------------------------Paragraph-------------------------------->
    <!-------------------------Paragraph-------------------------------->
    <tr class="bg-color-blue3" align="center">
        <td class="padding-x-bigger" align="center" valign="middle">
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#ffffff; line-height: 22px;">
                BlueJeans es la herramienta con la que podrás organizar o participar en reuniones virtuales a través de llamadas de vídeo o solo de voz. Además, puedes compartir pantalla e invitar al resto de participantes solo con un identificador de reunión.
            </p>
        </td>
    </tr>


<!-- space --><tr class="bg-color-blue3"><td class="padding-normal"></td></tr><!-- space -->
<!-- space --><tr class="bg-color-normal"><td class="padding-small"></td></tr><!-- space -->


    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <tr class="bg-color-normal" align="center">
        <td align="center" valign="middle">
            <img
                src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="portada"
                width="17%" height="auto"
            >
        </td>
    </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-smaller"></td></tr><!-- space -->

    <!-------------------------Paragraph-------------------------------->
    <!-------------------------Paragraph-------------------------------->
    <!-------------------------Paragraph-------------------------------->
    <tr class="bg-color-normal" align="center">
        <td class="padding-x-bigger" align="center" valign="middle">
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#1194E3; line-height: 22px;">
                ¿Quieres saber cómo funciona?
            </p>
        </td>
    </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-smaller"></td></tr><!-- space -->


    <!-------------------------1 Image buttons-------------------------------->
    <!-------------------------1 Image buttons-------------------------------->
    <!-------------------------1 Image buttons-------------------------------->
    <tr class="bg-color-normal" align="center">
        <td class="padding-x-big" align="center" valign="middle">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                    <td align="center">
                        <a 
                        href="https://example.com"
                        target="_blank">
                            <img
                                src="https://html-email-builder.pages.dev/images/others/other-5.png"
                                width="auto"
                                height="47px"
                            />
                        </a>
                    </td>
                </tr>
            </table>
        </td>
    </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-normal"></td></tr><!-- space -->


    <!-------------------------Paragraph-------------------------------->
    <!-------------------------Paragraph-------------------------------->
    <!-------------------------Paragraph-------------------------------->
    <tr class="bg-color-normal" align="center">
        <td class="padding-x-bigger" align="center" valign="middle">
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 22px; font-weight: bold; color:#1194E3; line-height: 22px;">
                Ventajas de BlueJeans
            </p>
        </td>
    </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-smaller"></td></tr><!-- space -->


    <!-------------------------Double Column-------------------------------->
    <!-------------------------Double Column-------------------------------->
    <!-------------------------Double Column-------------------------------->
    <!-- Change the width in every <td> to make it triple or whatever -->
    <tr class="bg-color-alt" align="left">
        <td align="left" valign="middle">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr valign="top" align="left">
                    <td style="width: 11%; padding: 0 !important;">
                        <img style="display: block !important;" src="https://html-email-builder.pages.dev/images/icons/icon-video.png" alt="Chats" width="auto" height="80">
                    </td>
                    <td valign="middle" style="width: 71%; padding: 15px;">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                            Puedes conectar distintos dispositivos: móviles, tablets, navegadores o equipos de telepresencia.
                        </p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>


<!-- space --><tr class="bg-color-normal"><td style="padding: 3px;"></td></tr><!-- space -->


    <!-------------------------Double Column-------------------------------->
    <!-------------------------Double Column-------------------------------->
    <!-------------------------Double Column-------------------------------->
    <!-- Change the width in every <td> to make it triple or whatever -->
    <tr class="bg-color-alt" align="left">
        <td align="left" valign="middle">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr valign="top" align="left">
                    <td style="width: 11%; padding: 0 !important;">
                        <img style="display: block !important;" src="https://html-email-builder.pages.dev/images/icons/icon-phone.png" alt="Chats" width="auto" height="80">
                    </td>
                    <td valign="middle" style="width: 71%; padding: 15px;">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                            Comparte vídeo en HD.
                        </p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    
    
<!-- space --><tr class="bg-color-normal"><td style="padding: 3px;"></td></tr><!-- space -->


    <!-------------------------Double Column-------------------------------->
    <!-------------------------Double Column-------------------------------->
    <!-------------------------Double Column-------------------------------->
    <!-- Change the width in every <td> to make it triple or whatever -->
    <tr class="bg-color-alt" align="left">
        <td align="left" valign="middle">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr valign="top" align="left">
                    <td style="width: 11%; padding: 0 !important;">
                        <img style="display: block !important;" src="https://html-email-builder.pages.dev/images/icons/icon-chat.png" alt="Chats" width="auto" height="80">
                    </td>
                    <td valign="middle" style="width: 71%; padding: 15px;">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                            Te permite realizar reuniones de hasta 25 participantes.
                        </p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>


<!-- space --><tr class="bg-color-normal"><td style="padding: 3px;"></td></tr><!-- space -->


    <!-------------------------Double Column-------------------------------->
    <!-------------------------Double Column-------------------------------->
    <!-------------------------Double Column-------------------------------->
    <!-- Change the width in every <td> to make it triple or whatever -->
    <tr class="bg-color-alt" align="left">
        <td align="left" valign="middle">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr valign="top" align="left">
                    <td style="width: 11%; padding: 0 !important;">
                        <img style="display: block !important;" src="https://html-email-builder.pages.dev/images/icons/icon-phone.png" alt="Chats" width="auto" height="80">
                    </td>
                    <td valign="middle" style="width: 71%; padding: 15px;">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                            Si algún usuario no puede asistir a la reunión, puedes grabarla.
                        </p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-normal"></td></tr><!-- space -->


    <!-------------------------Paragraph-------------------------------->
    <!-------------------------Paragraph-------------------------------->
    <!-------------------------Paragraph-------------------------------->
    <tr class="bg-color-normal" align="center">
        <td class="padding-x-bigger" align="center" valign="middle">
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: bold; color:#1194E3; line-height: 22px;">
                Solicita BlueJeans para organizar reuniones
            </p>
        </td>
    </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-smallest"></td></tr><!-- space -->


    <!-------------------------Paragraph-------------------------------->
    <!-------------------------Paragraph-------------------------------->
    <!-------------------------Paragraph-------------------------------->
    <tr class="bg-color-normal" align="center">
        <td class="padding-x-bigger" align="center" valign="middle">
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                Recuerda que para poder organizar reuniones en BlueJeans necesitas solicitar acceso a la herramienta a través de ServiceNow.
            </p>
        </td>
    </tr>


    <!-- space --><tr class="bg-color-normal"><td class="padding-normal"></td></tr><!-- space -->


    <!-------------------------Footer-------------------------------->
    <!-------------------------Footer-------------------------------->
    <!-------------------------Footer-------------------------------->
    <tr class="bg-color-footer" align="center">
        <td style="padding: 20px 30px;" align="center" valign="middle">
            <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                    <td style="width: 33%;" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Mail Builder Logo"
                                width="130px" height="auto" border="0">
                        </a>
                    </td>
                    <td style="width: 67%;" align="right" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/icons/icon-shield.png" alt="Facebook Icon"
                                width="auto" height="10px" border="0" style="display: inline-block;">
                        </a>
                        &nbsp;
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/icons/icon-shield.png" alt="Twitter Icon"
                                width="auto" height="10px" border="0" style="display: inline-block;">
                        </a>
                        &nbsp;
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/icons/icon-shield.png" alt="Linkedin Icon"
                                width="auto" height="10px" border="0" style="display: inline-block;">
                        </a>
                    </td>
                </tr>
            </table>
        </td>
    </tr>

</table>
<!-- end email container -->


</td>
</tr>
</table>


</center>

</body>

</html>
`
},

{
    id: 24,
    name: '24. ServiceNow Nuevos Países',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-24.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Lanzamiento ServiceNow</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            max-width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 100%;
            }
        }


        .margin-0                       { margin: 0 !important; }

        .padding-smallest               { padding: 5px !important; }
        .padding-smaller                { padding: 10px !important; }
        .padding-small                  { padding: 15px !important; }
        .padding-normal                 { padding: 20px !important; }
        .padding-big                    { padding: 25px !important; }
        .padding-bigger                 { padding: 30px !important; }

        .padding-x-smallest             { padding-left: 5px !important; padding-right: 5px !important; }
        .padding-x-smaller              { padding-left: 10px !important; padding-right: 10px !important; }
        .padding-x-small                { padding-left: 15px !important; padding-right: 15px !important; }
        .padding-x-normal               { padding-left: 20px !important; padding-right: 20px !important; }
        .padding-x-big                  { padding-left: 25px !important; padding-right: 25px !important; }
        .padding-x-bigger               { padding-left: 30px !important; padding-right: 30px !important; }

        .bg-color-general               { background-color: #E1E1E1 !important; }
        .bg-color-normal                { background-color: #ffffff !important; }
        .bg-color-alt                   { background-color: #f1f4f4 !important; }
        .bg-color-alt2                  { background-color: #EEEEF8 !important; }
        .bg-color-alt3                  { background-color: #DDDEF4 !important; }
        .bg-color-alt4                  { background-color: #191818 !important; }
        .bg-color-alt5                  { background-color: #343333 !important; }
        .bg-color-alt6                  { background-color: #282727 !important; }
        .bg-color-footer                { background-color: #000000 !important; }
        .bg-color-test                  { background-color: #b11818 !important; }
        .bg-color-blue1                 { background-color: #124FA8 !important; }
        .bg-color-blue2                 { background-color: #4C50C3 !important; }
        .bg-color-blue3                 { background-color: #1194E3 !important; }
    </style>
</head>

<body class="bg-color-general" style="margin: 0; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

    <center>
    <table width="600" class="container600" style="width: 600px; margin: 0 auto;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-normal">
    <td class="padding-x-big" width="100%" style="width: 100%; text-align: left;">
    
    <!--email container-->
    <table width="100%" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">
    
    <!-------------------------Header-------------------------------->
    <!-------------------------Header-------------------------------->
    <!-------------------------Header-------------------------------->
    <tr class="bg-color-normal" align="center">
        <td style="padding: 20px 0;" align="center" valign="middle">
            <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                    <td style="width: 33%;" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/headers/header-generic-1.png" alt="logo mail builder"
                                width="auto" height="53" border="0">
                        </a>
                    </td>
                    <td style="width: 67%;" align="right" valign="middle">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 22px; font-weight: bolder; color:#A6A9A9; letter-spacing: 5px;">

                        </p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>

 
    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <tr class="bg-color-normal" align="center">
        <td align="center" valign="middle">
            <img
                src="https://html-email-builder.pages.dev/images/headers/header-servicenow-0.png" alt="portada"
                width="100%" height="auto"
            >
        </td>
    </tr>


<!-- space --><tr class="bg-color-footer"><td class="padding-normal"></td></tr><!-- space -->


    <!-------------------------Paragraph-------------------------------->
    <!-------------------------Paragraph-------------------------------->
    <!-------------------------Paragraph-------------------------------->
    <tr class="bg-color-footer" align="center">
        <td class="padding-x-bigger" align="center" valign="middle">
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#ffffff; line-height: 22px;">
                From now on, you have a new portal to manage your incidents and ICT requests. With ServiceNow you can request assistance, manage your tickets and consult help material.
            </p>
        </td>
    </tr>


<!-------------------------Button-------------------------------->
<!-------------------------Button-------------------------------->
<!-------------------------Button-------------------------------->
<!--  Define width, height and bgcolor in TD attributes. 
TD height and color should be equal to A line-height and color.
Border radius probably won't work but it won't hurt either. -->
<!-- space --><tr class="bg-color-footer"><td class="padding-small"></td></tr><!-- space -->
<tr class="bg-color-footer" align="center">
    <td class="" align="center" valign="middle">
        <table style="-webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
            <tbody><tr> 
                <td width="250" height="45" bgcolor="#ff0000" align="center" style="color: #ffffff; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; display: block;">
                    <a href="" style="line-height: 45px; color: #ffffff; font-size: 16px; font-weight: bold; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width:100%; display:inline-block">
                        Discover your new tool!
                    </a>
                </td> 
            </tr>
        </tbody></table> 
    </td>
</tr>


<!-- space --><tr class="bg-color-footer"><td class="padding-normal"></td></tr><!-- space -->
<!-- space --><tr class="bg-color-alt4"><td class="padding-normal"></td></tr><!-- space -->


    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <tr class="bg-color-alt4" align="center">
        <td class="padding-x-bigger" align="center" valign="middle">
            <img
                src="https://html-email-builder.pages.dev/images/icons/icon-video.png" alt="portada"
                width="90%" height="auto"
            >
        </td>
    </tr>


<!-- space --><tr class="bg-color-alt4"><td class="padding-smallest"></td></tr><!-- space -->


    <!-------------------------Title-------------------------------->
    <!-------------------------Title-------------------------------->
    <!-------------------------Title-------------------------------->
    <tr class="bg-color-alt4" align="center">
        <td class="padding-x-small" align="center" valign="middle">
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 36px; font-weight: bolder; color:#ffffff;">
                How to use ServiceNow
            </p>
        </td>
    </tr>


<!-- space --><tr class="bg-color-alt4"><td class="padding-smaller"></td></tr><!-- space -->


    <!-------------------------Paragraph-------------------------------->
    <!-------------------------Paragraph-------------------------------->
    <!-------------------------Paragraph-------------------------------->
    <tr class="bg-color-alt4" align="center">
        <td class="padding-x-bigger" align="center" valign="middle">
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#ffffff; line-height: 22px;">
                In this tutorial you will learn how ...
            </p>
        </td>
    </tr>


<!-- space --><tr class="bg-color-alt4"><td class="padding-small"></td></tr><!-- space -->


    <!-------------------------Double Column-------------------------------->
    <!-------------------------Double Column-------------------------------->
    <!-------------------------Double Column-------------------------------->
    <!-- Change the width in every <td> to make it triple or whatever -->
    <tr class="bg-color-alt5" align="left">
        <td align="left" valign="middle">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tbody><tr valign="top" align="left">
                    <td style="width: 11%; padding: 0 !important;">
                        <img src="https://html-email-builder.pages.dev/images/icons/icon-info.png" style="display: block !important;" alt="button" width="auto" height="80">
                    </td>
                    <td valign="middle" style="width: 71%; padding: 15px;">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#fff; line-height: 22px;">
                            Register an incident if any of your ICT elements stops working.
                        </p>
                    </td>
                </tr>
            </tbody></table>
        </td>
    </tr>
    <tr class="bg-color-alt6" align="left">
        <td align="left" valign="middle">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tbody><tr valign="top" align="left">
                    <td style="width: 11%; padding: 0 !important;">
                        <img src="https://html-email-builder.pages.dev/images/icons/icon-info.png" style="display: block !important;" alt="button" width="auto" height="80">
                    </td>
                    <td valign="middle" style="width: 71%; padding: 15px;">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#fff; line-height: 22px;">
                            Make a request for a new device, access or application.
                        </p>
                    </td>
                </tr>
            </tbody></table>
        </td>
    </tr>
    <tr class="bg-color-alt5" align="left">
        <td align="left" valign="middle">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tbody><tr valign="top" align="left">
                    <td style="width: 11%; padding: 0 !important;">
                        <img src="https://html-email-builder.pages.dev/images/icons/icon-info.png" style="display: block !important;" alt="button" width="auto" height="80">
                    </td>
                    <td valign="middle" style="width: 71%; padding: 15px;">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#fff; line-height: 22px;">
                            Create a request on behalf of another user and approve or reject requests if that is your case.
                        </p>
                    </td>
                </tr>
            </tbody></table>
        </td>
    </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-normal"></td></tr><!-- space -->


<!-------------------------Button-------------------------------->
<!-------------------------Button-------------------------------->
<!-------------------------Button-------------------------------->
<!--  Define width, height and bgcolor in TD attributes. 
TD height and color should be equal to A line-height and color.
Border radius probably won't work but it won't hurt either. -->
<tr class="bg-color-normal" align="center">
    <td class="" align="center" valign="middle">
        <table style="-webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
            <tbody><tr> 
                <td width="230" height="45" bgcolor="#ff0000" align="center" style="color: #ffffff; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; display: block;">
                    <a href="" style="line-height: 45px; color: #ffffff; font-size: 16px; font-weight: bold; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width:100%; display:inline-block">
                        See tutorial video
                    </a>
                </td> 
            </tr>
        </tbody></table> 
    </td>
</tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-normal"></td></tr><!-- space -->


    <!-------------------------Border-------------------------------->
    <!-------------------------Border-------------------------------->
    <!-------------------------Border-------------------------------->
    <tr class="bg-color-normal" align="center">
        <td align="center" valign="middle">
            <table width="100%" style="border-top: 4px solid #ff0000;" role="presentation" cellspacing="0" cellpadding="0"></table>
        </td>
    </tr>


    <!-------------------------Footer-------------------------------->
    <!-------------------------Footer-------------------------------->
    <!-------------------------Footer-------------------------------->
    <tr class="bg-color-normal" align="center">
        <td height="100" style="height: 100px;" align="center" valign="middle">
            <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                    <td width="130" height="100" style="width: 130px; height: 100px;" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo Mail Builder"
                                width="130px" height="auto" border="0" style="display: inline-block; vertical-align: middle;">
                        </a>
                    </td>

                    <td width="40" height="100" style="width: 40px; height: 100px;" align="center" valign="middle">
                        <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="divider"
                            width="auto" height="auto" border="0" style="display: inline-block; vertical-align: middle;">
                    </td>

                    <td height="100" style="height: 100px;" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow"
                                width="auto" height="auto" border="0" style="display: inline-block; vertical-align: middle;">
                        </a>
                    </td>
                    
                    <td height="100" style="height: 100px;" align="right" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Facebook Icon"
                                width="auto" height="10px" border="0" style="display: inline-block;">
                        </a>
                        &nbsp;
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Twitter Icon"
                                width="auto" height="10px" border="0" style="display: inline-block;">
                        </a>
                        &nbsp;
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Linkedin Icon"
                                width="auto" height="10px" border="0" style="display: inline-block;">
                        </a>
                    </td>
                </tr>
            </table>
        </td>
    </tr>

</table>
<!-- end email container -->


</td>
</tr>
</table>


</center>

</body>

</html>
`
},

{
    id: 30,
    name: '30. Encuesta ServiceNow',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-30.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Phones</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            mso-line-height-rule: exactly;
        }
        
        * {
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 600px;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }
    </style>


</head>

<body class="bg-color-general" style="margin: 0 auto; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
    <table width="600" class="container600" style="margin: 0 auto; max-width: 600px;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-general">
    <td width="600" style="text-align: center;">
    
    <!--email container-->
    <table width="600" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">
    
    
    
<!-------------------------Header-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 4px 30px 0 30px;" align="center" valign="middle">
    <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td height="80" align="left" valign="middle">
                    <a href="https://example.com" target="_blank">
                        <img src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="Mail Builder" width="auto" height="53" border="0">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>

        
        
        
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>
<!-------------------------Border-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 0;" align="center" valign="middle">
    <table
        style="border-bottom: 4px solid #ffffff;"
        width="600"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr>


        
        
        
<!-------------------------Titular-------------------------------->
<tr bgcolor="#E20714" align="center">
<td style="padding: 20px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 25px; color:#ffffff; margin: 0;">
                        ¡TU OPINIÓN NOS IMPORTA Y NOS AYUDA A MEJORAR!
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
</td>
</tr>

        
        
        
<!-------------------------Texto-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 25px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; line-height: 22px; font-weight: normal; color:#2D2B2B; margin: 0;">
                    El pasado mes de abril rediseñamos tu herramienta ServiceNow para hacerla más intuitiva y fácil de usar. Pero para seguir mejorándola, tu opinión es esencial.
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>

        
        
        
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Titular-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 20px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 25px; color:#2D2B2B; margin: 0;">
                        ¿NOS AYUDAS?
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
</td>
</tr>

        
        
        
<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 0 20px 25px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; line-height: 22px; font-weight: normal; color:#2D2B2B; margin: 0;">
                    Solo tienes que responder a una breve encuesta para que podamos
        <br>
        seguir mejorando. ¡No te llevará más de 2 minutos!
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>

        
        
        
<!-------------------------Primary Button-------------------------------->
<!--  Define width, height and bgcolor in TD attributes. 
TD height and color should be equal to A line-height and color.
Border radius probably won't work but it won't hurt either. -->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 5px 0 30px 0;" align="center" valign="middle">
    <table style="-webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
    <tbody>
        <tr> 
            <td width="300" height="45" bgcolor="#ff0000" align="center" style="color: #ffffff; border: 3px solid #ff0000; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; text-decoration: none; display: block;">
                <a href="https://example.com"
                style="line-height: 39px; color: #ffffff; background-color: #ff0000; font-size: 16px; font-weight: normal; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width:100%; display:inline-block">
                    QUIERO COMPARTIR MI OPINIÓN
                </a>
            </td> 
        </tr>
    </tbody>
    </table> 
</td>
</tr>

        
        
        
<!-------------------------Texto-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 25px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 12px; line-height: 18px; font-weight: normal; color:#2D2B2B; margin: 0;">
                                Por favor, no compartas este email.
        <br>
        Si tienes problemas de acceso, puedes hacer aquí:
        <br>
        <a href="https://example.com">
            <span style="color: #2D2B2B; font-weight: bold; text-decoration: underline;">https://example.com</span>
        </a>
<br>
<br>
Te garantizamos el anonimato y confidencialidad de tus respuestas.
<br>
La encuesta y toda la información la gestiona y almacena Survey Partner, que nos facilita informes agregados.
<br>
Los criterios para reportar información son muy estrictos, evitando identificar personas con respuestas.
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>

        
        
        
<!-- -----------------------Footer - Español e Ingles------------------------------ -->
<!-------------------------Footer-------------------------------->
<tr bgcolor="#000000" align="center">
<td style="padding: 0 30px 4px 30px;" align="center" valign="middle">
    <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td height="80" align="left" valign="middle">
                    <a href="https://example.com" target="_blank">
                        <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="40" border="0">
                        <!-- <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="40" border="0"> -->
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>

        
        
        
    
    
    
<!-- -----------------------Ruta online mail builder---------------------->
<!-- https://html-email-builder.pages.dev/images/others/other-5.png -->


<!-- -----------------------Ruta local ---------------------->
<!-- ./img/ -->


<!-- -----------------------Link con estilo ---------------------->
<!-- <a href="mailto:windows10upgrades@example.com">
    <span style="color: #ff0000; font-weight: bold; text-decoration: underline;">windows10upgrades@example.com</span>
</a> -->

<!-- -----------------------Nueva linea ---------------------->
<!-- <br> -->


<!-- -----------------------Texto en Negrita---------------------->
<!-- <b>Texto en negrita</b> -->


<!-- -----------------------Texto en Color---------------------->
<!-- <span style="color: #ff0000;">windows10upgrades@example.com</span> -->



<!-- -----------------------Espacio entre bloques---------------------->
<!-- <tr style="background-color: #ffffff"><td><p style="line-height: 40px;">&nbsp;</p></td></tr> -->

</table>
<!-- end email container -->


</td>
</tr>
</table>


</center>





</body>
</html>
`
},

{
    id: 31,
    name: '31. Acceso Condicional',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-31.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Phones</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 600px;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }
    </style>
</head>

<body class="bg-color-general" style="margin: 0; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
    <table width="600" class="container600" style="margin: 0 auto; max-width: 600px;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-general">
    <td width="600" style="text-align: center;">
    
    <!--email container-->
    <table width="600" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">



<!-------------------------Header-------------------------------->
<tr class="bg-color-normal" align="center">
    <td style="padding: 20px 30px;" align="center" valign="middle">
        <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody><tr>
                <td style="width: 33%;" align="left" valign="middle">
                    <a href="https://example.com" target="_blank">
                        <img src="https://html-email-builder.pages.dev/images/headers/header-generic-1.png" alt="logo mail builder" width="auto" height="53" border="0">
                    </a>
                </td>
                <td style="width: 67%;" align="right" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 22px; font-weight: bolder; color:#A6A9A9; letter-spacing: 5px;">
  
                    </p>
                </td>
            </tr>
        </tbody></table>
    </td>
</tr>

    

                

    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <tr class="bg-color-normal" align="center">
        <td align="center" valign="middle">
            <img
                src="https://html-email-builder.pages.dev/images/headers/header-generic-1.png" alt="portada"
                width="650" height="166"
            >
        </td>
    </tr>




<!-------------------------Paragraph-------------------------------->
<!-------------------------Paragraph-------------------------------->
<!-------------------------Paragraph-------------------------------->
<!-- space --><tr class="bg-color-alt"><td class="padding-small"></td></tr><!-- space -->
<tr class="bg-color-alt" align="center">
    <td class="padding-x-big" align="center" valign="middle">
        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
            Con el fin de proteger tu información personal y la de la compañía, necesitamos que configures el <b>Portal de Empresa</b> en tu móvil. De este modo, aseguras la información en todos nuestros dispositivos.
            <br><br>
            A partir del <b>8 de julio</b>, para seguir accediendo a tu correo corporativo en el móvil deberás configurar el Portal de Empresa. Si no lo haces, cada vez que accedas a Outlook, se te solicitará un pin adicional de seguridad.
        </p>
    </td>
  </tr>
  
  
  <!-- space --><tr class="bg-color-alt"><td class="padding-small"></td></tr><!-- space -->




<!-------------------------Title-------------------------------->
<!-------------------------Title-------------------------------->
<!-------------------------Title-------------------------------->
<!-- space --><tr class="bg-color-normal"><td class="padding-small"></td></tr><!-- space -->
<tr class="bg-color-normal" align="center">
    <td class="padding-x-big" align="center" valign="middle">
        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 24px; font-weight: bold; color:#000000
        ;">
            Cómo configurar el portal de empresa
        </p>
    </td>
  </tr>
  <!-- space --><tr class="bg-color-normal"><td class="padding-smallest"></td></tr><!-- space -->





<!-------------------------Double Column with buttons-------------------------------->
<!-------------------------Double Column with buttons-------------------------------->
<!-------------------------Double Column with buttons-------------------------------->
<!-- Change the width in every <td> to make it triple or whatever -->
    <tr class="bg-color-normal" align="center">
        <td align="center" valign="middle">
    
            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tbody><tr valign="middle" align="center">
                    <td bgcolor="#ffffff" width="280" align="right" valign="middle" style="padding: 15px;">
                        <!-------------------------- Button ---------------------------->
                        <table style="-webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
                            <tbody>
                                <tr class="bg-color-normal" align="center">
                                    <td class="" align="center" valign="middle">
                                        <table border="0" cellspacing="0" cellpadding="0" role="presentation"> 
                                            <tbody><tr> 
                                                <td width="220" height="40" align="center" style="color: #ffffff; background-color: #ff0000; border: 2px solid #ff0000; -webkit-border-radius: 10px; -moz-border-radius: 10px; border-radius: 10px; display: block;">
                                                    <a href="https://example.com" style="line-height: 36px; color: #ffffff; font-size: 16px; font-weight: bold; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width:100%; display:inline-block">
                                                        Con Android
                                                    </a>
                                                </td> 
                                            </tr></tbody>
                                        </table> 
                                    </td>
                                </tr>
                            </tbody>
                        </table> 
                    </td>
                    <td width="10" style="padding: 0;">
    
                    </td>
    
                    <td bgcolor="#ffffff" width="280" align="left" valign="middle" style="padding: 15px;">
                        <!-------------------------- Button ---------------------------->
                        <table style="-webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
                            <tbody>
                                <tr class="bg-color-normal" align="center">
                                    <td class="" align="center" valign="middle">
                                        <table border="0" cellspacing="0" cellpadding="0" role="presentation"> 
                                            <tbody><tr> 
                                                <td width="220" height="40" align="center" style="color: #ffffff; background-color: #ff0000; border: 2px solid #ff0000; -webkit-border-radius: 10px; -moz-border-radius: 10px; border-radius: 10px; display: block;">
                                                    <a href="https://example.com" style="line-height: 36px; color: #ffffff; font-size: 16px; font-weight: bold; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width:100%; display:inline-block">
                                                        Con iOS
                                                    </a>
                                                </td> 
                                            </tr></tbody>
                                        </table> 
                                    </td>
                                </tr>
                            </tbody>
                        </table> 
                    </td>
                </tr>
            </tbody></table>
        </td>
    </tr>
    <!-- space --><tr class="bg-color-normal"><td class="padding-smallest"></td></tr><!-- space -->
    



    <!-------------------------Title-------------------------------->
    <!-------------------------Title-------------------------------->
    <!-------------------------Title-------------------------------->
    <tr class="bg-color-normal" align="center">
        <td class="padding-x-big" align="center" valign="middle">
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 18px; color:#000000
            ;">
                ¿No sabes si lo tienes configurado? Compruébalo
                <span style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 18px; color:#ff0000; text-decoration: underline;"><a href="https://example.com" style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 18px; font-weight: bold; color:#ff0000; text-decoration: underline;">aquí.</a></span>
            </p>
        </td>
    </tr>




<!-- space --><tr class="bg-color-normal"><td class="padding-normal"></td></tr><!-- space -->
<!-- space --><tr class="bg-color-alt"><td class="padding-small"></td></tr><!-- space -->

<!-------------------------Title-------------------------------->
<!-------------------------Title-------------------------------->
<!-------------------------Title-------------------------------->
<tr class="bg-color-alt" align="center">
    <td class="padding-x-big" align="center" valign="middle">
        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 24px; font-weight: bold;color:#000000;">
            Beneficios de configurar
            <br>
            el portal de empresa
        </p>
    </td>
</tr>




<!-- space --><tr class="bg-color-alt"><td class="padding-smallest"></td></tr><!-- space -->


<tr class="bg-color-alt">
    <td>
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr valign="top" align="center">
                <td bgcolor="#f1f4f4" valign="top" style="width: 196px; padding: 25px 10px 15px 10px;">
                    <img src="https://html-email-builder.pages.dev/images/icons/icon-shield.png" alt="portada" width="auto" height="114px">
                    &nbsp;
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                        Protección de tus datos e identidad digital
                    </p>
                </td>
                <td style="width: 6px; padding: 0;">

                </td>
                <td bgcolor="#f1f4f4" valign="top" style="width: 196px; padding: 25px 10px 15px 10px;">
                    <img src="https://html-email-builder.pages.dev/images/icons/icon-shield.png" alt="portada" width="auto" height="114px">
                    &nbsp;
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                        Borrado remoto de datos en caso de pérdida o robo
                    </p>
                </td>
                <td style="width: 6px; padding: 0;">

                </td>
                <td bgcolor="#f1f4f4" valign="top" style="width: 196px; padding: 25px 10px 15px 10px;">
                    <img src="https://html-email-builder.pages.dev/images/icons/icon-shield.png" alt="portada" width="auto" height="114px">
                    &nbsp;
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                        Defensa frente a posibles amenazas digitales
                    </p>
                </td>
            </tr>

        </tbody>
        </table>
    </td>
</tr>
<!-- space --><tr class="bg-color-alt"><td class="padding-small"></td></tr><!-- space -->













<!-------------------------Title-------------------------------->
<!-------------------------Title-------------------------------->
<!-------------------------Title-------------------------------->
<!-- space --><tr class="bg-color-normal"><td class="padding-small"></td></tr><!-- space -->
<tr class="bg-color-normal" align="center">
    <td class="padding-x-big" align="center" valign="middle">
        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 24px; font-weight: bold; color:#000000
        ;">
            Participa en el sorteo
            <br>
            de un iPhone XS de 256GB
        </p>
    </td>
</tr>
<!-- space --><tr class="bg-color-normal"><td class="padding-small"></td></tr><!-- space -->




    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <tr class="bg-color-alt" align="center">
        <td align="center" valign="middle">
            <img src="https://html-email-builder.pages.dev/images/icons/icon-shield.png" alt="teams" width="550">
        </td>
    </tr>
<!-- space --><tr class="bg-color-normal"><td class="padding-smaller"></td></tr><!-- space -->




<!-------------------------Paragraph-------------------------------->
<!-------------------------Paragraph-------------------------------->
<!-------------------------Paragraph-------------------------------->
<tr class="bg-color-normal" align="center">
    <td class="padding-x-big" align="center" valign="middle">
        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
            Configurando tu Portal de Empresa en las próximas dos semanas.
        </p>
    </td>
</tr>
  
<!-- space --><tr class="bg-color-normal"><td class="padding-normal"></td></tr><!-- space -->






<!-------------------------Footer Version 3 - Español-------------------------------->
<!-------------------------Footer Version 3 - Español-------------------------------->
<!-------------------------Footer Version 3 - Español-------------------------------->
<tr class="bg-color-footer" align="center">
    <td class="padding-x-big" height="100" style="height: 100px;" align="center" valign="middle">
        <table width="600" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td height="600" align="left" valign="middle" style="height: 100px;">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="auto" border="0" style="display: inline-block; vertical-align: middle;">
                        </a>
                    </td>
                  </tr>
            </tbody>
        </table>
    </td>
</tr>



</table>
<!-- end email container -->


</td>
</tr>
</table>


</center>

</body>
</html>
`
},

{
    id: 32,
    name: '32. Número Teams',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-32.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Phones</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 600px;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }
    </style>
</head>

<body class="bg-color-general" style="margin: 0; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
    <table width="600" class="container600" style="margin: 0 auto; max-width: 600px;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-general">
    <td width="600" style="text-align: center;">
    
    <!--email container-->
    <table width="600" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">



    <!-------------------------Header-------------------------------->
    <!-------------------------Header-------------------------------->
    <!-------------------------Header-------------------------------->
    <tr class="bg-color-normal" align="center">
        <td style="padding: 20px 30px;" align="center" valign="middle">
            <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tbody><tr>
                    <td style="width: 33%;" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/headers/header-generic-1.png" alt="logo mail builder" width="auto" height="53" border="0">
                        </a>
                    </td>
                    <td style="width: 67%;" align="right" valign="middle">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 22px; font-weight: bolder; color:#A6A9A9; letter-spacing: 5px;">

                        </p>
                    </td>
                </tr>
            </tbody></table>
        </td>
    </tr>

                

    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <tr class="bg-color-normal" align="center">
        <td align="center" valign="middle">
            <img
                src="https://html-email-builder.pages.dev/images/headers/header-teams-0.png" alt="portada"
                width="600" height="auto"
            >
        </td>
    </tr>



    <!-------------------------Title-------------------------------->
    <!-------------------------Title-------------------------------->
    <!-------------------------Title-------------------------------->
    <!-- space --><tr class="bg-color-blueTeams"><td class="padding-smaller"></td></tr><!-- space -->
    <tr class="bg-color-blueTeams" align="center">
        <td class="padding-x-normal" align="center" valign="middle">
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 28px; font-weight: bold; color:#ffffff
            ;">
                ¿Todavía no tienes la app de Teams en tu móvil?
            </p>
        </td>
    </tr>
    <!-- space --><tr class="bg-color-blueTeams"><td class="padding-smaller"></td></tr><!-- space -->




    <!-------------------------Paragraph-------------------------------->
    <!-------------------------Paragraph-------------------------------->
    <!-------------------------Paragraph-------------------------------->
    <tr class="bg-color-blueTeams" align="center">
        <td class="padding-x-big" align="center" valign="middle">
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#ffffff; line-height: 22px;">
                Si tienes una videoconferencia programada y no te encuentras delante del ordernador, con la app de Teams puedes unirte a la reunión desde el móvil.
            </p>
        </td>
    </tr>
    <!-- space --><tr class="bg-color-blueTeams"><td class="padding-smaller"></td></tr><!-- space -->




    <!-- space --><tr class="bg-color-alt"><td class="padding-smaller"></td></tr><!-- space -->

    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <tr class="bg-color-alt" align="center">
        <td align="center" valign="middle">
            <img
                src="https://html-email-builder.pages.dev/images/icons/icon-chat.png" alt="teams"
                width="auto" height="65"
            >
        </td>
    </tr>
    <!-- space --><tr class="bg-color-alt"><td class="padding-smallest"></td></tr><!-- space -->


    <!-------------------------Title-------------------------------->
    <!-------------------------Title-------------------------------->
    <!-------------------------Title-------------------------------->
    <tr class="bg-color-alt" align="center">
        <td class="padding-x-normal" align="center" valign="middle">
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 22px; font-weight: bold; color:#020202;">
                ¿Por qué descargar la app de Teams?
            </p>
        </td>
    </tr>
    <!-- space --><tr class="bg-color-alt"><td class="padding-smaller"></td></tr><!-- space -->

    <tr class="bg-color-alt" align="center">
        <td align="center" valign="middle">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr valign="top" align="center">
                    <td bgcolor="#ffffff" valign="top" style="width: 196px; padding: 25px 10px 15px 10px;">
                        <img src="https://html-email-builder.pages.dev/images/icons/icon-info.png" alt="portada" width="auto" height="82px">
                        &nbsp;
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                            Disfruta de todas las funciones de Teams en tu móvil
                        </p>
                    </td>
                    <td style="width: 6px; padding: 0;">

                    </td>
                    <td bgcolor="#ffffff" valign="top" style="width: 196px; padding: 25px 10px 15px 10px;">
                        <img src="https://html-email-builder.pages.dev/images/icons/icon-chat.png" alt="portada" width="auto" height="82px">
                        &nbsp;
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                            Envía mensajes de audio a través del chat
                        </p>
                    </td>
                    <td style="width: 6px; padding: 0;">

                    </td>
                    <td bgcolor="#ffffff" valign="top" style="width: 196px; padding: 25px 10px 15px 10px;">
                        <img src="https://html-email-builder.pages.dev/images/icons/icon-info.png" alt="portada" width="auto" height="82px">
                        &nbsp;
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                            Establece días y horas de silencio, para controlar tu tiempo después del trabajo
                        </p>
                    </td>
                </tr>

            </tbody>
            </table>
        </td>
    </tr>





    <!-- space --><tr class="bg-color-alt"><td style="padding: 4px;"></td></tr><!-- space -->


    <!-- space --><tr class="bg-color-normal"><td class="padding-small"></td></tr><!-- space -->
    <!-------------------------Title-------------------------------->
    <!-------------------------Title-------------------------------->
    <!-------------------------Title-------------------------------->
    <tr class="bg-color-normal" align="center">
        <td class="padding-x-normal" align="center" valign="middle">
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 22px; font-weight: bold; color:#020202;">
                Descarga Teams
            </p>
        </td>
    </tr>
    <!-- space --><tr class="bg-color-normal"><td class="padding-smaller"></td></tr><!-- space -->






    <!-------------------------Double Column-------------------------------->
    <!-------------------------Double Column-------------------------------->
    <!-------------------------Double Column-------------------------------->
    <!-- Change the width in every <td> to make it triple or whatever -->
    <tr class="bg-color-normal" align="center">
        <td align="center" valign="middle">
            <a href="https://example.com" target="_blank">
                <img src="https://html-email-builder.pages.dev/images/others/other-5.png" alt="Android"
                width="auto" height="43px" border="0" style="display: inline-block;">
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://example.com" target="_blank">
                <img src="https://html-email-builder.pages.dev/images/others/other-2.png" alt="Apple"
                width="auto" height="43px" border="0" style="display: inline-block;">
            </a>
        </td>
    </tr>

    <!-- space --><tr class="bg-color-normal"><td class="padding-small"></td></tr><!-- space -->
    <!-- space --><tr class="bg-color-alt"><td class="padding-small"></td></tr><!-- space -->

    <tr class="bg-color-alt" align="center">
        <td class="padding-x-normal" align="center" valign="middle">
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 22px; font-weight: bold; color:#020202;">
                ¿Cuándo acceder a una reunión a través de llamada telefónica?
            </p>
        </td>
    </tr>



    <!-------------------------Paragraph-------------------------------->
    <!-------------------------Paragraph-------------------------------->
    <!-------------------------Paragraph-------------------------------->
    <!-- space --><tr class="bg-color-alt"><td class="padding-smaller"></td></tr><!-- space -->
    <tr class="bg-color-alt" align="center">
        <td class="padding-x-bigger" align="center" valign="middle">
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                Únete a las reuniones utilizando la llamada telefónica <b>solo si tienes problemas de conexión o no funciona la app</b> correctamente.
                <br>
                Ayúdanos a reducir el coste del servicio de audioconferencia.
            </p>
        </td>
    </tr>

    <!-- space --><tr class="bg-color-alt"><td class="padding-small"></td></tr><!-- space -->

    <tr class="bg-color-alt" align="center">
        <td class="padding-x-normal" align="center" valign="middle">
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 18px; font-weight: bold; color:#ff0000; line-height: 22px;">
                Importante
            </p>
        </td>
    </tr>

    <!-- space --><tr class="bg-color-alt"><td class="padding-smallest"></td></tr><!-- space -->

    <tr class="bg-color-alt" align="center">
        <td class="padding-x-bigger" align="center" valign="middle">
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                <b>Si solo te puedes incorporar a la reunión a través de la llamada, <br>
                busca tu número local</b> debajo del link de la convocatoria de la reunión.
            </p>
        </td>
    </tr>

    <!-- space --><tr class="bg-color-alt"><td class="padding-smallest"></td></tr><!-- space -->



    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <tr class="bg-color-alt" align="center">
        <td align="center" valign="middle">
            <img src="https://html-email-builder.pages.dev/images/others/other-6.png" alt="teams" width="560">
        </td>
    </tr>
    <!-- space --><tr class="bg-color-alt"><td class="padding-smaller"></td></tr><!-- space -->




<!-------------------------Footer Version 3 - Español-------------------------------->
<!-------------------------Footer Version 3 - Español-------------------------------->
<!-------------------------Footer Version 3 - Español-------------------------------->
<tr class="bg-color-footer" align="center">
    <td class="padding-x-big" height="100" style="height: 100px;" align="center" valign="middle">
        <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td width="130" height="100" style="width: 130px; height: 100px;" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo Mail Builder" width="130" height="auto" border="0" style="display: inline-block; vertical-align: middle;">
                        </a>
                    </td>

                    <td width="40" height="100" style="width: 40px; height: 100px;" align="center" valign="middle">
                        <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="divider" width="auto" height="auto" border="0" style="display: inline-block; vertical-align: middle;">
                    </td>

                    <td height="100" style="height: 100px;" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="auto" border="0" style="display: inline-block; vertical-align: middle;">
                        </a>
                    </td>
                    
                    <td height="100" style="height: 100px;" align="right" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/icons/icon-shield.png" alt="Facebook Icon" width="auto" height="10px" border="0" style="display: inline-block;">
                        </a>
                        &nbsp;
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/icons/icon-shield.png" alt="Twitter Icon" width="auto" height="10px" border="0" style="display: inline-block;">
                        </a>
                        &nbsp;
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/icons/icon-shield.png" alt="Linkedin Icon" width="auto" height="10px" border="0" style="display: inline-block;">
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>

                

</table>
<!-- end email container -->


</td>
</tr>
</table>


</center>

</body>
</html>
`
},

{
    id: 33,
    name: '33. Píldoras PMO',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-33.png`,
    code:
`

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Email</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            max-width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 100%;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        .padding-x-biggest               { padding-left: 50px; padding-right: 50px; }

        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-alt5                  { background-color: #343333; }
        .bg-color-alt6                  { background-color: #282727; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-blue1                 { background-color: #124FA8; } /* azul onedrive */
        .bg-color-blue2                 { background-color: #4C50C3; }
        .bg-color-blue3                 { background-color: #5B61DB; }
        .bg-color-blue4                 { background-color: #323884; }
        .bg-color-blue5                 { background-color: #1194E3; }

    </style>
</head>

<body style="min-width: 100%; margin: 0; padding: 0; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

    <center>
    <table width="100%" role="presentation" cellpadding="0" cellspacing="0">
    <tr>
    <td style="width: 600px; max-width: 600px; margin: 0 auto;">
    
    <!--email container-->
    <table class="container600" style="width: 600px; max-width: 600px; margin: 0 auto;" bgcolor="#ffffff" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0">



    <!-------------------------Header-------------------------------->
    <!-------------------------Header-------------------------------->
    <!-------------------------Header-------------------------------->
    <tr style="background-color: #ffffff;" align="center">
        <td style="padding: 10px 30px;" align="center" valign="middle">
            <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tbody><tr>
                    <td style="width: 33%;" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/headers/header-generic-1.png" alt="logo mail builder" width="auto" height="53" border="0">
                        </a>
                    </td>
                    <td style="width: 67%;" align="right" valign="middle">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 22px; font-weight: bolder; color:#A6A9A9; letter-spacing: 5px;">

                        </p>
                    </td>
                </tr>
            </tbody></table>
        </td>
    </tr>

                

    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <tr style="background-color: #f1f4f4;" align="center">
        <td align="center" valign="middle">
            <img
                src="https://html-email-builder.pages.dev/images/headers/header-generic-1.png" alt="portada"
                width="100%" height="auto"
            >
        </td>
    </tr>

    
    <!-------------------------Title-------------------------------->
    <!-- space --><tr style="background-color: #f1f4f4;"><td style="padding: 20px;"></td></tr><!-- space -->

    <tr style="background-color: #f1f4f4;" align="center">
        <td style="padding-left: 20px; padding-right: 20px;" align="center" valign="middle">
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 28px; font-weight: bolder; color:#020202;">
                ¿Cómo gestionar riesgos de forma óptima?
            </p>
        </td>
    </tr>

    <!-- space --><tr style="background-color: #f1f4f4;"><td style="padding: 15px;"></td></tr><!-- space -->




<!-------------------------Pill 1-------------------------------->
<tr class="bg-color-alt" align="center">
    <td align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr valign="top" align="center">
                    <td bgcolor="#ffffff" valign="top" style="width: 500px; padding: 30px 10px;">
                        <img src="https://html-email-builder.pages.dev/images/icons/icon-shield.png" alt="portada" width="100px" height="auto">
                        &nbsp;
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil excepturi deserunt quod distinctio facilis sapiente impedit cum reprehenderit vel reiciendis maxime ipsum dignissimos, perferendis quas et placeat est fugit delectus.
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>




<!-- space --><tr class="bg-color-alt"><td class="padding-big"></td></tr><!-- space -->


<!-------------------------Footer Version 3 - Español-------------------------------->
<!-------------------------Footer Version 3 - Español-------------------------------->
<!-------------------------Footer Version 3 - Español-------------------------------->
<tr style="background-color: #000000;" align="center">
    <td style="width: 540px; height: 100px;" align="center" valign="middle">
        <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td width="130" height="100" style="padding-left: 30px; width: 130px; height: 100px;" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo Mail Builder" width="130" height="auto" border="0" style="display: inline-block; vertical-align: middle;">
                        </a>
                    </td>

                    <td width="40" height="100" style="width: 40px; height: 100px;" align="center" valign="middle">
                        <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="divider" width="auto" height="auto" border="0" style="display: inline-block; vertical-align: middle;">
                    </td>

                    <td height="100" style="height: 100px;" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="auto" border="0" style="display: inline-block; vertical-align: middle;">
                        </a>
                    </td>
                    
                    <td height="100" style="padding-right: 30px; height: 100px;" align="right" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/icons/icon-shield.png" alt="Facebook Icon" width="auto" height="10px" border="0" style="display: inline-block;">
                        </a>
                        &nbsp;
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/icons/icon-shield.png" alt="Twitter Icon" width="auto" height="10px" border="0" style="display: inline-block;">
                        </a>
                        &nbsp;
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/icons/icon-shield.png" alt="Linkedin Icon" width="auto" height="10px" border="0" style="display: inline-block;">
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>

                

</table>
<!-- end email container -->


</td>
</tr>
</table>


</center>

</body>

</html>
`
},

{
    id: 34,
    name: '34. Comunicación Telefónica',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-34.png`,
    code:
`

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Email</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            max-width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 100%;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }

    </style>
</head>

<body style="min-width: 100%; margin: 0; padding: 0; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

    <center>
    <table width="100%" role="presentation" cellpadding="0" cellspacing="0">
    <tr>
    <td style="width: 600px; max-width: 600px; margin: 0 auto;">
    
    <!--email container-->
    <table class="container600" style="width: 600px; max-width: 600px; margin: 0 auto;" bgcolor="#ffffff" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0">
    
    <!-------------------------Header-------------------------------->
    <!-------------------------Header-------------------------------->
    <!-------------------------Header-------------------------------->
    <tr class="bg-color-normal" align="center">
        <td style="padding: 20px;" align="center" valign="middle">
            <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                    <td style="width: 33%;" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/headers/header-generic-1.png" alt="logo mail builder"
                                width="auto" height="53" border="0">
                        </a>
                    </td>
                    <td style="width: 67%;" align="right" valign="middle">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 22px; font-weight: bolder; color:#A6A9A9; letter-spacing: 5px;">

                        </p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>

 
    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <tr class="bg-color-normal" align="center">
        <td align="center" valign="middle">
            <img
                src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="portada"
                width="100%" height="auto"
            >
        </td>
    </tr>


    <!-------------------------Title-------------------------------->
    <!-------------------------Title-------------------------------->
    <!-------------------------Title-------------------------------->
    <tr class="bg-color-red" align="center">
        <td class="padding-x-small" align="center" valign="middle">
            <p style="font-size: 16px;">&nbsp;</p>
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 30px; font-weight: bolder; color:#ffffff;">
                Desde el área de telefonía móvil <br>trabajamos para mejorar nuestro servicio
            </p>
            <p style="font-size: 18px;">&nbsp;</p>
        </td>
    </tr>



    <!-------------------------Paragraph-------------------------------->
    <!-------------------------Paragraph-------------------------------->
    <!-------------------------Paragraph-------------------------------->
    <tr class="bg-color-alt" align="center">
        <td class="padding-x-normal" align="center" valign="middle">
            <p style="font-size: 20px;">&nbsp;</p>
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                En el transcurso de la semana, <b>un gestor de telefonía se pondrá en contacto contigo en horario laboral desde el número de teléfono: 667 91 60 04</b> para confirmar algunos datos sobre tu terminal móvil.
            </p>
            <p style="font-size: 22px;">&nbsp;</p>
        </td>
    </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-small"></td></tr><!-- space -->


    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <tr class="bg-color-normal" align="center">
        <td class="padding-x-bigger" align="center" valign="middle">
            <img
                src="https://html-email-builder.pages.dev/images/others/other-4.png" alt="portada"
                width="auto" height="auto"
            >
        </td>
    </tr>


    <!-------------------------Title-------------------------------->
    <!-------------------------Title-------------------------------->
    <!-------------------------Title-------------------------------->
    <tr class="bg-color-normal" align="center">
        <td class="padding-x-small" align="center" valign="middle">
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 26px; font-weight: bolder; color:#E20714;">
                ¿Qué tengo que hacer?
            </p>
        </td>
    </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-smallest"></td></tr><!-- space -->


    <!-------------------------Paragraph-------------------------------->
    <!-------------------------Paragraph-------------------------------->
    <!-------------------------Paragraph-------------------------------->
    <tr class="bg-color-normal" align="center">
        <td class="padding-x-normal" align="center" valign="middle">
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                Para agilizar esta gestión, por favor, <b>es necesario que tengas<br> a mano la siguiente información</b>:
            </p>
        </td>
    </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-smaller"></td></tr><!-- space -->

    <!-------------------------Paragraph-------------------------------->
    <!-------------------------Paragraph-------------------------------->
    <!-------------------------Paragraph-------------------------------->
    <tr class="bg-color-normal" align="center">
        <td class="padding-x-normal" align="center" valign="middle">
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 18px; color:#020202; line-height: 22px;">
                <span style="font-weight: bold; color: #020202;">IMEI</span>
                <br>
                <span style="font-weight: bold; color: #020202;">Modelo</span>
                <br>
                <span style="font-weight: bold; color: #020202;">Antigüedad del dispositivo</span>
                <br>
                <span style="font-size: 16px; color: #020202">(si no recuerdas la fecha exacta, basta con una aproximación)</span>
            </p>
        </td>
    </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-normal"></td></tr><!-- space -->



    <!-------------------------Title-------------------------------->
    <!-------------------------Title-------------------------------->
    <!-------------------------Title-------------------------------->
    <tr class="bg-color-alt" align="center">
        <td class="padding-x-small" align="center" valign="middle">
            <p style="font-size: 20px;">&nbsp;</p>
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 26px; font-weight: bolder; color:#E20714;">
                ¿Cómo averiguo esta información?
            </p>
            <p style="font-size: 20px;">&nbsp;</p>
        </td>
    </tr>

    
<!-- space --><tr class="bg-color-normal"><td style="padding: 2px;"></td></tr><!-- space -->


<!-------------------------50% table-------------------------------->
<!-------------------------50% table-------------------------------->
<!-------------------------50% table-------------------------------->
<!-- Change the width in every <td> to make it triple or whatever -->
    <tr class="bg-color-alt" align="center">
        <td align="center" valign="middle">
    
            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr valign="top" align="center">
                    <td bgcolor="#f1f4f4" valign="top" style="width: 297px; padding: 20px 5px !important;">
                        <img src="https://html-email-builder.pages.dev/images/others/other-2.png" alt="portada" width="auto" height="auto">
                        &nbsp;
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                            Ajustes <span style="color:red; font-weight: bold;">></span> Acerca del Teléfono
                        </p>
                    </td>
                    <td bgcolor="#ffffff" style="width: 4px; padding: 0 !important;">
    
                    </td>
                    <td bgcolor="#f1f4f4" valign="top" style="width: 297px; padding: 20px 5px !important;">
                        <img src="https://html-email-builder.pages.dev/images/others/other-1.png" alt="portada" width="auto" height="auto">
                        &nbsp;
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                            Ajustes <span style="color:red; font-weight: bold;">></span> General <span style="color:red; font-weight: bold;">></span> Información
                        </p>
                    </td>
                </tr>
            </tbody>
            </table>
        </td>
    </tr>
    
<!-- space --><tr class="bg-color-normal"><td class="padding-small"></td></tr><!-- space -->

    <!-------------------------Paragraph-------------------------------->
    <!-------------------------Paragraph-------------------------------->
    <!-------------------------Paragraph-------------------------------->
    <tr class="bg-color-normal" align="center">
        <td class="padding-x-smaller" align="center" valign="middle">
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 18px; font-weight: bold; color:#020202; line-height: 24px;">
                Entre todos podemos mejorar nuestro desempeño laboral.
                <br>
                <span style="color:red; font-weight: bold;">¡Contamos con tu ayuda!</span>
            </p>
        </td>
    </tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-normal"></td></tr><!-- space -->




<!-------------------------Footer Version 3 - Español-------------------------------->
<!-------------------------Footer Version 3 - Español-------------------------------->
<!-------------------------Footer Version 3 - Español-------------------------------->
<tr class="bg-color-footer" align="center">
    <td class="padding-x-big" height="100" style="height: 100px;" align="center" valign="middle">
        <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td width="130" height="100" style="width: 130px; height: 100px;" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo Mail Builder" width="130" height="auto" border="0" style="display: inline-block; vertical-align: middle;">
                        </a>
                    </td>

                    <td width="40" height="100" style="width: 40px; height: 100px;" align="center" valign="middle">
                        <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="divider" width="auto" height="auto" border="0" style="display: inline-block; vertical-align: middle;">
                    </td>

                    <td height="100" style="height: 100px;" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="auto" border="0" style="display: inline-block; vertical-align: middle;">
                        </a>
                    </td>
                    
                    <td height="100" style="height: 100px;" align="right" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/icons/icon-shield.png" alt="Facebook Icon" width="auto" height="10px" border="0" style="display: inline-block;">
                        </a>
                        &nbsp;
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/icons/icon-shield.png" alt="Twitter Icon" width="auto" height="10px" border="0" style="display: inline-block;">
                        </a>
                        &nbsp;
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/icons/icon-shield.png" alt="Linkedin Icon" width="auto" height="10px" border="0" style="display: inline-block;">
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>

                




</table>
<!-- end email container -->


</td>
</tr>
</table>


</center>

</body>

</html>
`
},

{
    id: 35,
    name: '35. Encuesta 01',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-35.png`,
    code:
`

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Phones</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 600px;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }
    </style>
</head>

<body class="bg-color-general" style="margin: 0; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
    <table width="600" class="container600" style="margin: 0 auto; max-width: 600px;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-general">
    <td width="600" style="text-align: center;">
    
    <!--email container-->
    <table width="600" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">






<!-------------------------Header-------------------------------->
<tr class="bg-color-normal" align="center">
    <td style="padding: 20px 30px;" align="center" valign="middle">
        <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody><tr>
                <td style="width: 33%;" align="left" valign="middle">
                    <a href="https://example.com" target="_blank">
                        <img src="https://html-email-builder.pages.dev/images/headers/header-generic-1.png" alt="logo mail builder" width="auto" height="53" border="0">
                    </a>
                </td>
                <td style="width: 67%;" align="right" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 22px; font-weight: bolder; color:#A6A9A9; letter-spacing: 5px;">

                    </p>
                </td>
            </tr>
        </tbody></table>
    </td>
</tr>

              

<!-------------------------Image-------------------------------->
<tr class="bg-color-normal" align="center">
  <td align="center" valign="middle">
      <img src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="cover" width="100%" height="auto">
      <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="herramientas" width="100%" height="auto">
  </td>
</tr>



<!-------------------------Title-------------------------------->
<!-- space --><tr class="bg-color-alt"><td class="padding-small"></td></tr><!-- space -->
<tr class="bg-color-alt" align="center">
  <td class="padding-x-smaller" align="center" valign="middle">
      <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 24px; font-weight: bold; color:#020202;">
          ¿Qué herramientas utilizas para trabajar en equipo?
      </p>
      <p style="font-size: 8px;">&nbsp;</p>
      <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202;">
          Queremos que seas capaz de sacar todo el provecho <br> de las aplicaciones para comunicarte y colaborar día a día.
      </p>
  </td>
</tr>
<!-- space --><tr class="bg-color-alt"><td class="padding-smaller"></td></tr><!-- space -->


<!-------------------------Image-------------------------------->
<tr class="bg-color-normal" align="center">
  <td align="center" valign="middle">
      <img src="https://html-email-builder.pages.dev/images/others/other-5.png" alt="encuesta" width="100%" height="auto">
  </td>
</tr>




<!-------------------------Title-------------------------------->
<tr class="bg-color-normal" align="center">
  <td class="padding-x-smaller" align="center" valign="middle">
      <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 24px; font-weight: bold; color:#020202;">
          ¿Nos ayudarías contestando esta breve encuesta?
      </p>
      <p style="font-size: 8px;">&nbsp;</p>
      <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202;">
          No te tomará más de 5 minutos y la información nos servirá para mejorar
          <br>
          tu experiencia diaria con las herramientas digitales.
      </p>
  </td>
</tr>


<!-- space --><tr class="bg-color-normal"><td class="padding-small"></td></tr><!-- space -->


<!-------------------------Button-------------------------------->
<tr class="bg-color-normal" align="center">
  <td class="" align="center" valign="middle">
      <table border="0" cellspacing="0" cellpadding="0" role="presentation"> 
          <tbody><tr> 
              <td width="220" height="40" align="center" style="color: #ffffff; background-color: #ff0000; border: 3px solid #ff0000; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; display: block;">
                  <a href=""
                  style="line-height: 34px; color: #ffffff; font-size: 16px; font-weight: bold; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width:100%; display:inline-block">
                      Responde a la encuesta
                  </a>
              </td> 
          </tr></tbody>
      </table> 
  </td>
</tr>
<!-- space --><tr class="bg-color-normal"><td class="padding-small"></td></tr><!-- space -->


<!-------------------------Title-------------------------------->
<tr class="bg-color-normal" align="center">
    <td class="padding-x-small" align="center" valign="middle">
        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 12px; color:#020202;">
            Te garantizamos el anonimato y confidencialidad de tus respuestas. La encuesta y toda la información demográfica relacionada con tu perfil profesional la gestiona y almacena Survey Partner, que nos facilita informes agregados. Los criterios para reportar información son muy estrictos, evitando identificar personas con respuestas.
        </p>
    </td>
  </tr>


  <!-- space --><tr class="bg-color-normal"><td class="padding-small"></td></tr><!-- space -->


<!-------------------------Footer Version 3 - Español-------------------------------->
<tr class="bg-color-footer" align="center">
  <td class="padding-x-big" height="100" style="height: 100px;" align="center" valign="middle">
      <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
          <tbody>
              <tr>
                  <td width="130" height="100" style="width: 130px; height: 100px;" align="left" valign="middle">
                      <a href="https://example.com" target="_blank">
                          <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo Mail Builder" width="130" height="auto" border="0" style="display: inline-block; vertical-align: middle;">
                      </a>
                  </td>

                  <td width="40" height="100" style="width: 40px; height: 100px;" align="center" valign="middle">
                      <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="divider" width="auto" height="auto" border="0" style="display: inline-block; vertical-align: middle;">
                  </td>

                  <td height="100" style="height: 100px;" align="left" valign="middle">
                      <a href="https://example.com" target="_blank">
                          <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="auto" border="0" style="display: inline-block; vertical-align: middle;">
                      </a>
                  </td>
                  
                  <td height="100" style="height: 100px;" align="right" valign="middle">
                      <a href="https://example.com" target="_blank">
                          <img src="https://html-email-builder.pages.dev/images/icons/icon-shield.png" alt="Facebook Icon" width="auto" height="10px" border="0" style="display: inline-block;">
                      </a>
                      &nbsp;
                      <a href="https://example.com" target="_blank">
                          <img src="https://html-email-builder.pages.dev/images/icons/icon-shield.png" alt="Twitter Icon" width="auto" height="10px" border="0" style="display: inline-block;">
                      </a>
                      &nbsp;
                      <a href="https://example.com" target="_blank">
                          <img src="https://html-email-builder.pages.dev/images/icons/icon-shield.png" alt="Linkedin Icon" width="auto" height="10px" border="0" style="display: inline-block;">
                      </a>
                  </td>
              </tr>
          </tbody>
      </table>
  </td>
</tr>

              



</table>
<!-- end email container -->


</td>
</tr>
</table>


</center>


</body>

</html>
`
},

{
    id: 36,
    name: '36. Windows 10 Update',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-36.png`,
    code:
`

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Email</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            max-width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 100%;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        .padding-x-biggest               { padding-left: 50px; padding-right: 50px; }

        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-alt5                  { background-color: #343333; }
        .bg-color-alt6                  { background-color: #282727; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-blue1                 { background-color: #124FA8; } /* azul onedrive */
        .bg-color-blue2                 { background-color: #4C50C3; }
        .bg-color-blue3                 { background-color: #5B61DB; }
        .bg-color-blue4                 { background-color: #323884; }
        .bg-color-blue5                 { background-color: #1194E3; }

    </style>
</head>

<body style="min-width: 100%; margin: 0; padding: 0; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

    <center>
    <table width="100%" role="presentation" cellpadding="0" cellspacing="0">
    <tr>
    <td style="width: 600px; max-width: 600px; margin: 0 auto;">
    
    <!--email container-->
    <table class="container600" style="width: 600px; max-width: 600px; margin: 0 auto;" bgcolor="#f1f4f4" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0">



    <!-------------------------Header-------------------------------->
    <!-------------------------Header-------------------------------->
    <!-------------------------Header-------------------------------->
    <tr style="background-color: #ffffff;" align="center">
        <td style="padding: 10px 30px;" align="center" valign="middle">
            <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tbody><tr>
                    <td style="width: 33%;" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/headers/header-generic-1.png" alt="logo mail builder" width="auto" height="53" border="0">
                        </a>
                    </td>
                    <td style="width: 67%;" align="right" valign="middle">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 22px; font-weight: bolder; color:#A6A9A9; letter-spacing: 5px;">

                        </p>
                    </td>
                </tr>
            </tbody></table>
        </td>
    </tr>

                

    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <tr style="background-color: #f1f4f4;" align="center">
        <td align="center" valign="middle">
            <img
                src="https://html-email-builder.pages.dev/images/headers/header-generic-1.png" alt="portada"
                width="600" height="auto"
                style="display: block;"
            >
        </td>
    </tr>

    
    <!-------------------------Title-------------------------------->
    <!-- space --><tr style="background-color: #f1f4f4;"><td style="padding: 20px 0;"></td></tr><!-- space -->

    <tr style="background-color: #f1f4f4;" align="center">
        <td align="center" valign="middle">
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 24px; font-weight: bolder; color:#020202;">
                Esta semana se actualizará Windows 10 en tu ordenador
            </p>
            <p style="line-height: 16px;">&nbsp;</p>
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                Aunque nos gustaría no molestarte, esta actualización es requerida por Microsoft
                <br>
                para <b>mejorar la experiencia del usuario</b> y garantizar el soporte de tu ordenador.
                <br>
                <br>
            </p>
        </td>
    </tr>



    <!-------------------------Top-------------------------------->
    <tr style="background-color: #f1f4f4;" align="center">
        <td align="center" valign="middle">
            <img
                src="https://html-email-builder.pages.dev/images/others/other-1.png" alt="portada"
                width="550" height="auto"
                style="display: block;"
            >
        </td>
    </tr>





<!-------------------------Pill 1-------------------------------->
<tr class="bg-color-alt" align="center">
    <td class="padding-x-big" align="center" valign="middle" bgcolor="#f1f4f4">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr valign="top" align="center">
                    <td class="padding-x-big" bgcolor="#ffffff" valign="top">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 22px; font-weight: bold; color:#020202; line-height: 22px;">
                            Actualiza tu ordenador
                            <br>
                            <br>
                        </p>
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                            Al igual que todos los meses, tu equipo se reiniciará pero esta vez el <b>proceso de actualización llevará más tiempo</b> (entre 30 y 60 minutos).
                            <br>
                            <br>
                            Si no reinicias el equipo, después de 48 horas se forzará automáticamente, por eso es importante que <b>selecciones un momento en que no te resulte inconveniente</b>.
                            <br>
                            <br>Durante el proceso de actualización <b>no apagues el ordenador</b>, ya que podría dañarse y ocasionar la pérdida de datos.
                            <br><br><br>
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>








<!-- space --><tr class="bg-color-alt"><td><p style="line-height: 20px;">&nbsp;</p></td></tr><!-- space -->




<!-------------------------50% table-------------------------------->
<tr class="bg-color-alt" align="center">
    <td class="padding-x-big" align="center" valign="middle">

        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr bgcolor="#f1f4f4" valign="top" align="center">
                <td valign="top" style="width: 265px;">
                    <img src="https://html-email-builder.pages.dev/images/others/other-4.png" alt="portada" width="265" height="auto"
                    style="display: block;">
                </td>
                <td style="width: 20px; padding: 0 !important;">

                </td>
                <td valign="top" style="width: 265px;">
                    <img src="https://html-email-builder.pages.dev/images/others/other-3.png" alt="portada" width="265" height="auto"
                    style="display: block;">
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>


<!-------------------------50% table-------------------------------->
<tr class="bg-color-alt" align="center">
    <td class="padding-x-big" align="center" valign="middle">

        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr valign="top" align="center">
                <td bgcolor="#ffffff" valign="top" style="width: 265px; height: 50px; padding: 0 10px 30px 10px;">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                        Si después de la actualización tienes algún problema, abre una incidencia a través de <a href="https://example.com">
                            <span style="color: #ff0000; font-weight: bold;text-decoration: underline;">ServiceNow</span>
                        </a> usando la categoría PCs y Periféricos / Actualización Windows 10
                    </p>
                </td>
                <td style="width: 20px; padding: 0 !important;">

                </td>
                <td bgcolor="#ffffff" valign="top" style="width: 265px; height: 50px; padding: 0 15px 30px 15px;">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                        <br>
                        Si te fuera imposible hacer la actualización, escribe a:
                        <br>
                        <a href="mailto:windows10upgrades@example.com">
                            <span style="color: #ff0000; font-weight: bold;text-decoration: underline;">windows10upgrades@example.com</span>
                        </a>
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>


<!-- space --><tr class="bg-color-alt"><td><p style="line-height: 40px;">&nbsp;</p></td></tr><!-- space -->





<tr style="background-color: #f1f4f4;" align="center">
    <td align="center" valign="middle">
        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 15px; color:#020202; line-height: 22px;">
            Lamentamos las molestias que esto pueda ocasionar y agradecemos tu cooperación.
        </p>
    </td>
</tr>


<!-- space --><tr class="bg-color-alt"><td><p style="line-height: 40px;">&nbsp;</p></td></tr><!-- space -->


<!-------------------------Footer Version 3 - Español-------------------------------->
<!-------------------------Footer Version 3 - Español-------------------------------->
<!-------------------------Footer Version 3 - Español-------------------------------->
<tr style="background-color: #000000;" align="center">
    <td style="padding: 1px 30px;" align="center" valign="middle">
        <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td height="90" style="height: 90px;" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="auto" border="0" style="display: inline-block; vertical-align: middle;">
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>

                

</table>
<!-- end email container -->


</td>
</tr>
</table>


</center>

</body>

</html>
`
},

{
    id: 38,
    name: '38. Invitación Documentum',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-38.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Phones</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            mso-line-height-rule: exactly;
        }
        
        * {
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 600px;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }
    </style>
</head>

<body class="bg-color-general" style="margin: 0 auto; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
    <table width="600" class="container600" style="margin: 0 auto; max-width: 600px;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-general">
    <td width="600" style="text-align: center;">
    
    <!--email container-->
    <table width="600" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">


<!-------------------------Header-------------------------------->
<tr class="bg-color-normal" align="center">
    <td style="padding: 0 30px;" align="center" valign="middle">
        <table width="540" height="70" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/headers/header-generic-1.png" alt="Logo ServiceNow" width="auto" height="53" border="0">
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>


    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <tr style="background-color: #f1f4f4;" align="center">
        <td align="center" valign="middle">
            <img
                src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="portada"
                width="600" height="auto"
                style="display: block;"
            >
        </td>
    </tr>

    
    <!-------------------------Title-------------------------------->
    <tr style="background-color: #f1f4f4;" align="center">
        <td align="center" valign="middle">
            <p style="line-height: 40px;">&nbsp;</p>
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 23px; font-weight: bolder; color:#020202;">
                Descubre todo lo que puedes hacer con Documentum D2
            </p>
            <p style="line-height: 16px;">&nbsp;</p>
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                ¿Quieres conocer cómo gestionar documentos corporativos de forma
                <br>
                más rápida e inteligente? ¡No te pierdas estos vídeos explicativos y obtén
                <br>
                el máximo partido de la herramienta!
            </p>
            <p style="line-height: 28px;">&nbsp;</p>
        </td>
    </tr>



    <!-------------------------Top-------------------------------->
    <tr style="background-color: #f1f4f4;" align="center">
        <td align="center" valign="middle">
            <img
            src="https://html-email-builder.pages.dev/images/icons/icon-info.png" alt="portada"
            width="550" height="88"
            style="display: block;"
        >
        </td>
    </tr>


    <!-------------------------Pill 1-------------------------------->
    <tr class="bg-color-alt" align="center">
        <td class="padding-x-big" align="center" valign="middle" bgcolor="#f1f4f4">
            <table width="550" role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tbody>
                    <tr valign="top" align="center">
                        <td bgcolor="#ffffff" valign="top">
                            <p style="line-height: 14px;">&nbsp;</p>
                            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 20px; font-weight: bold; color:#020202; line-height: 22px;">
                                Con ellos aprenderás:
                            </p>
                            <p style="line-height: 24px;">&nbsp;</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>



<!-------------------------Double Column-------------------------------->
<tr align="center" bgcolor="#f1f4f4">
    <td align="center" valign="middle">
        <table width="550" role="presentation" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff">
            <tbody>
                <tr valign="middle" align="left" bgcolor="#ffffff">
                    <td width="40">&nbsp;</td>
                    <td width="26">
                        <img src="https://html-email-builder.pages.dev/images/icons/icon-info.png" style="display: block;" alt="button" width="26" height="26">
                    </td>
                    <td width="14">&nbsp;</td>
                    <td width="390">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 16px;">
                            Qué es Documentum D2, para qué se utiliza y sus formas de acceso.
                        </p>
                    </td>
                    <td width="40">&nbsp;</td>
                </tr>
                <tr><td><p style="line-height: 22px;">&nbsp;</p></td></tr>
                <tr valign="middle" align="left" bgcolor="#ffffff">
                    <td width="40">&nbsp;</td>
                    <td width="26">
                        <img src="https://html-email-builder.pages.dev/images/icons/icon-info.png" style="display: block;" alt="button" width="26" height="26">
                    </td>
                    <td width="14">&nbsp;</td>
                    <td width="390">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 16px;">
                            Cómo crear, editar, guardar y visualizar contenidos.
                        </p>
                    </td>
                    <td width="40">&nbsp;</td>
                </tr>
                <tr><td><p style="line-height: 22px;">&nbsp;</p></td></tr>
                <tr valign="middle" align="left" bgcolor="#ffffff">
                    <td width="40">&nbsp;</td>
                    <td width="26">
                        <img src="https://html-email-builder.pages.dev/images/icons/icon-info.png" style="display: block;" alt="button" width="26" height="26">
                    </td>
                    <td width="14">&nbsp;</td>
                    <td width="390">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 16px;">
                            Cómo realizar búsquedas por filtros y generar reportes.
                        </p>
                    </td>
                    <td width="40">&nbsp;</td>
                </tr>
                <tr><td><p style="line-height: 22px;">&nbsp;</p></td></tr>
                <tr valign="middle" align="left" bgcolor="#ffffff">
                    <td width="40">&nbsp;</td>
                    <td width="26">
                        <img src="https://html-email-builder.pages.dev/images/icons/icon-info.png" style="display: block;" alt="button" width="26" height="26">
                    </td>
                    <td width="14">&nbsp;</td>
                    <td width="390">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 16px;">
                            Cómo trabajar de forma colaborativa con otras personas.
                        </p>
                    </td>
                    <td width="40">&nbsp;</td>
                </tr>
                <tr><td><p style="line-height: 22px;">&nbsp;</p></td></tr>
                <tr valign="middle" align="left" bgcolor="#ffffff">
                    <td width="40">&nbsp;</td>
                    <td width="26">
                        <img src="https://html-email-builder.pages.dev/images/icons/icon-info.png" style="display: block;" alt="button" width="26" height="26">
                    </td>
                    <td width="14">&nbsp;</td>
                    <td width="390">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 16px;">
                            Qué es SmartView y cómo utilizarlo en todo tipo de dispositivos.
                        </p>
                    </td>
                    <td width="40">&nbsp;</td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>




    <!-------------------------Pill 1-------------------------------->
    <tr class="bg-color-alt" align="center">
        <td class="padding-x-big" align="center" valign="middle" bgcolor="#f1f4f4">
            <table width="550" role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tbody>
                    <tr valign="top" align="center">
                        <td bgcolor="#ffffff" valign="top">
                            <p style="line-height: 30px;">&nbsp;</p>
                            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 20px; font-weight: bold; color:#020202; line-height: 26px;">
                                ¿Quieres dominar Documentum D2?
                            </p>
                            <p style="line-height: 28px;">&nbsp;</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>



<!-------------------------Button-------------------------------->
<tr class="bg-color-alt" align="center">
    <td align="center" valign="middle">
        <table width="550" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
            <tbody>
                <tr>
                    <td width="165" height="40" valign="top" style="border-top: 3px solid #ffffff; border-bottom: 3px solid #f1f4f4;">
                        <p style="line-height: 20px; background-color: #ffffff;">&nbsp;</p>
                        <p style="line-height: 20px; background-color: #f1f4f4;">&nbsp;</p>
                    </td>
                    <td width="220" height="40" align="center" style="color: #ffffff; background-color: #ff0000; border: 3px solid #ff0000; display: block; text-decoration: none;">
                        <a href=""
                        style="line-height: 34px; color: #ffffff; background-color: #ff0000; font-size: 16px; font-weight: bold; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width:100%; display:inline-block">
                            ¡Ver vídeos ahora!
                        </a>
                    </td>
                    <td width="165" height="40" valign="top" style="border-top: 3px solid #ffffff; border-bottom: 3px solid #f1f4f4;">
                        <p style="line-height: 20px; background-color: #ffffff;">&nbsp;</p>
                        <p style="line-height: 20px; background-color: #f1f4f4;">&nbsp;</p>
                    </td>
                </tr>
            </tbody>
        </table> 
    </td>
</tr>


<!-- space --><tr class="bg-color-alt"><td><p style="line-height: 40px;">&nbsp;</p></td></tr><!-- space -->


    <!-------------------------Pill 1-------------------------------->
    <tr class="bg-color-alt" align="center">
        <td class="padding-x-big" align="center" valign="middle" bgcolor="#f1f4f4">
            <table width="550" role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tbody>
                    <tr valign="top" align="center">
                        <td bgcolor="#ffffff" valign="top">
                            <p style="line-height: 30px;">&nbsp;</p>
                            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 20px; font-weight: bold; color:#020202; line-height: 26px;">
                                ¡Nuevo manual de uso disponible!
                            </p>
                            <p style="line-height: 5px;">&nbsp;</p>
                            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 26px;">
                                Encuentra información detallada de la aplicación y el paso a paso para utilizar
                                <br>
                                sus principales funcionalidades y aclarar todas tus dudas sobre la versión clásica.
                            </p>
                            <p style="line-height: 28px;">&nbsp;</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>




<!-------------------------Button-------------------------------->
<tr class="bg-color-alt" align="center">
    <td align="center" valign="middle">
        <table width="550" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
            <tbody>
                <tr>
                    <td width="165" height="40" valign="top" style="border-top: 3px solid #ffffff; border-bottom: 3px solid #f1f4f4;">
                        <p style="line-height: 20px; background-color: #ffffff;">&nbsp;</p>
                        <p style="line-height: 20px; background-color: #f1f4f4;">&nbsp;</p>
                    </td>
                    <td width="220" height="40" align="center" style="color: #ff0000; background-color: #ffffff; border: 3px solid #ff0000; display: block; text-decoration: none;">
                        <a href=""
                        style="line-height: 34px; color: #ff0000; background-color: #ffffff; font-size: 16px; font-weight: bold; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width:100%; display:inline-block">
                            Accede al manual
                        </a>
                    </td>
                    <td width="165" height="40" valign="top" style="border-top: 3px solid #ffffff; border-bottom: 3px solid #f1f4f4;">
                        <p style="line-height: 20px; background-color: #ffffff;">&nbsp;</p>
                        <p style="line-height: 20px; background-color: #f1f4f4;">&nbsp;</p>
                    </td>
                </tr>
            </tbody>
        </table> 
    </td>
</tr>


<!-- space --><tr class="bg-color-alt"><td><p style="line-height: 40px;">&nbsp;</p></td></tr><!-- space -->


<!-- -----------------------Footer Version 3 - Español------------------------------ -->
<tr class="bg-color-footer" align="center">
    <td style="padding: 0 30px;" align="center" valign="middle">
        <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td height="80" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="auto" border="0">
                            <!-- <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="auto" border="0"> -->
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>


<!-- -----------------------Ruta online mail builder---------------------->
<!-- https://html-email-builder.pages.dev/images/others/other-4.png -->


<!-- -----------------------Ruta local ---------------------->
<!-- ./img/ -->


<!-- -----------------------Link con estilo ---------------------->
<!-- <a href="mailto:windows10upgrades@example.com">
    <span style="color: #ff0000; font-weight: bold; text-decoration: underline;">windows10upgrades@example.com</span>
</a> -->

<!-- -----------------------Nueva linea ---------------------->
<!-- <br> -->


<!-- -----------------------Texto en Negrita---------------------->
<!-- <b>Texto en negrita</b> -->


<!-- -----------------------Texto en Color---------------------->
<!-- <span style="color: #ff0000;">windows10upgrades@example.com</span> -->



<!-- -----------------------Espacio entre bloques---------------------->
<!-- <tr style="background-color: #ffffff"><td><p style="line-height: 40px;">&nbsp;</p></td></tr> -->


</table>
<!-- end email container -->


</td>
</tr>
</table>


</center>


</body>
</html>
`
},

{
    id: 39,
    name: '39. Actualización Contraseña',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-39.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Phones</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 600px;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }
    </style>
</head>

<body class="bg-color-general" style="margin: 0 auto; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
    <table width="600" class="container600" style="margin: 0 auto; max-width: 600px;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-general">
    <td width="600" style="text-align: center;">
    
    <!--email container-->
    <table width="600" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">



    <!-------------------------Header-------------------------------->
    <!-------------------------Header-------------------------------->
    <!-------------------------Header-------------------------------->
    <tr style="background-color: #ffffff;" align="center">
        <td style="padding: 10px 30px;" align="center" valign="middle">
            <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tbody><tr>
                    <td style="width: 33%;" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/headers/header-generic-1.png" alt="logo mail builder" width="auto" height="53" border="0">
                        </a>
                    </td>
                    <td style="width: 67%;" align="right" valign="middle">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 22px; font-weight: bolder; color:#A6A9A9; letter-spacing: 5px;">

                        </p>
                    </td>
                </tr>
            </tbody></table>
        </td>
    </tr>

                

    <!-------------------------Image-------------------------------->
    <tr style="background-color: #f1f4f4;" align="center">
        <td align="center" valign="middle">
            <img
                src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="portada"
                width="600" height="auto"
                style="display: block;"
            >
        </td>
    </tr>

    
    <!-------------------------Title-------------------------------->
    <tr style="background-color: #ff0000;" align="center">
        <td align="center" valign="middle">
            <p style="line-height: 24px;">&nbsp;</p>
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 32px; font-weight: bolder; color:#ffffff;">
                Actualización de contraseña
            </p>
            <p style="line-height: 26px;">&nbsp;</p>
        </td>
    </tr>


    <tr style="background-color: #f1f4f4;" align="center">
        <td align="center" valign="middle">
            <p style="line-height: 24px;">&nbsp;</p>
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                Por motivos de seguridad, en los próximos días se te solicitará que actualices
                <br>
                tu contraseña de acceso a tus aplicaciones de <span style="color: red;">MAIL BUILDER</span>
            </p>
            <p style="line-height: 26px;">&nbsp;</p>
        </td>
    </tr>



    <!-------------------------Image-------------------------------->
    <tr style="background-color: #ffffff;" align="center">
        <td align="center" valign="middle">
            <p style="line-height: 24px;">&nbsp;</p>
            <img
                src="https://html-email-builder.pages.dev/images/icons/icon-info.png" alt="portada"
                width="83" height="auto"
                style="display: block;"
            >
            <p style="line-height: 22px;">&nbsp;</p>
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                Si en los próximos días vas a desplazarte a las oficinas de la compañía,
                <br>
                te aconsejamos que aproveches ese momento para realizar la actualización.
            </p>
        </td>
    </tr>


    <!-------------------------Image-------------------------------->
    <tr style="background-color: #ffffff;" align="center">
        <td align="center" valign="middle">
            <p style="line-height: 36px;">&nbsp;</p>
            <img
                src="https://html-email-builder.pages.dev/images/icons/icon-info.png" alt="portada"
                width="69" height="auto"
                style="display: block;"
            >
            <p style="line-height: 22px;">&nbsp;</p>
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                En caso de que tengas alguna duda o incidencia, por favor,
                <br>
                contacta a través de <b>ServiceNow</b> o con tu soporte TIC local.
            </p>
        </td>
    </tr>


<!-- space --><tr class="bg-color-normal"><td><p style="line-height: 44px;">&nbsp;</p></td></tr><!-- space -->


<!-------------------------Footer Version 3 - Español-------------------------------->
<tr class="bg-color-footer" align="center">
    <td style="padding: 0 30px;" height="100" align="center" valign="middle">
        <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td height="100" align="left" valign="middle" style="height: 100px;">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="auto" border="0" style="display: inline-block; vertical-align: middle;">
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>

</table>
<!-- end email container -->


</td>
</tr>
</table>


</center>


</body>
</html>
`
},

{
    id: 40,
    name: '40. Webinar Anuncio',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-40.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Phones</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            mso-line-height-rule: exactly;
        }
        
        * {
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 600px;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }
    </style>
</head>

<body class="bg-color-general" style="margin: 0 auto; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
    <table width="600" class="container600" style="margin: 0 auto; max-width: 600px;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-general">
    <td width="600" style="text-align: center;">
    
    <!--email container-->
    <table width="600" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">


<!-------------------------Header-------------------------------->
<tr class="bg-color-normal" align="center">
    <td style="padding: 0 30px;" align="center" valign="middle">
        <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td height="100" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/headers/header-generic-1.png" alt="Logo ServiceNow" width="auto" height="53" border="0">
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>


    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <tr style="background-color: #f1f4f4;" align="center">
        <td align="center" valign="middle">
            <img
                src="https://html-email-builder.pages.dev/images/headers/header-generic-1.png" alt="portada"
                width="600" height="auto"
                style="display: block;"
            >
        </td>
    </tr>

    
    <!-------------------------Title-------------------------------->
    <tr style="background-color: #f1f4f4;" align="center">
        <td align="center" valign="middle">
            <p style="line-height: 40px;">&nbsp;</p>
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 23px; font-weight: bolder; color:#020202;">
                Aprovecha al máximo el potencial de Documentum D2
            </p>
            <p style="line-height: 16px;">&nbsp;</p>
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                ¿Te gustaría dominar la herramienta a la perfección? ¡Enhorabuena!
                <br>
                Reserva tu lugar en nuestro webinar y aprende todo lo que necesitas
                <br>
                saber para ser un experto.
            </p>
            <p style="line-height: 40px;">&nbsp;</p>
        </td>
    </tr>



    <tr class="bg-color-alt" align="center">
        <td align="center" valign="middle">
            <table width="550" role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tbody>
                    <tr align="center" valign="top" bgcolor="#ffffff">
                        <td width="50">&nbsp;</td>
                        <td width="150">
                            <p style="line-height: 20px;">&nbsp;</p>
                            <img src="https://html-email-builder.pages.dev/images/icons/icon-info.png" alt="Icono autenticacion" height="38" width="38">
                            <p style="line-height: 12px;">&nbsp;</p>
                            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 24px;">
                                ¿Cuándo?
                            </p>
                            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size:16px; font-weight: bolder;color:#020202; line-height: 22px;"
                            >
                                11/10
                            </p>
                        </td>
                        <td width="150">
                            <p style="line-height: 20px;">&nbsp;</p>
                            <img src="https://html-email-builder.pages.dev/images/icons/icon-info.png" alt="Icono autenticacion" height="38" width="38">
                            <p style="line-height: 12px;">&nbsp;</p>
                            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size:16px; color:#020202; line-height: 24px;">
                                ¿Dónde?
                            </p>
                            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size:16px; font-weight: bolder;color:#020202; line-height: 22px;"
                            >
                                Live Events
                            </p>
                        </td>
                        <td width="150">
                            <p style="line-height: 20px;">&nbsp;</p>
                            <img src="https://html-email-builder.pages.dev/images/icons/icon-info.png" alt="Icono autenticacion" height="38" width="38">
                            <p style="line-height: 12px;">&nbsp;</p>
                            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size:16px; color:#020202; line-height: 24px;">
                                ¿Horario?
                            </p>
                            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size:16px; font-weight: bolder;color:#020202; line-height: 22px;"
                            >
                                10:00 a.m.
                            </p>
                        </td>
                        <td width="50">&nbsp;</td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
    
    
    
    
    <!-------------------------Pill 1-------------------------------->
    <tr class="bg-color-alt" align="center">
        <td class="padding-x-big" align="center" valign="middle" bgcolor="#f1f4f4">
            <table width="550" role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tbody>
                    <tr valign="top" align="center">
                        <td bgcolor="#ffffff" valign="top">
                            <p style="line-height: 20px;">&nbsp;</p>
                            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 26px;">
                                Te mostraremos cómo gestionar tus contenidos empresariales
                                <br>
                                de forma rápida y eficaz utilizando sus múltiples funcionalidades.
                                <br>
                                <b>¡No te quedes afuera!</b>
                            </p>
                            <p style="line-height: 28px;">&nbsp;</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>



<!-- space --><tr class="bg-color-alt"><td><p style="line-height: 40px;">&nbsp;</p></td></tr><!-- space -->


<!-------------------------Pill 1-------------------------------->
<tr class="bg-color-alt" align="center">
    <td class="padding-x-big" align="center" valign="middle" bgcolor="#f1f4f4">
        <table width="550" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr valign="top" align="center">
                    <td bgcolor="#ffffff" valign="top">
                        <p style="line-height: 30px;">&nbsp;</p>
                        <img src="https://html-email-builder.pages.dev/images/icons/icon-info.png" alt="Icono autenticacion" height="100" width="100">
                        <p style="line-height: 30px;">&nbsp;</p>
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 20px; font-weight: bold; color:#020202; line-height: 26px;">
                            ¿Tienes dudas sobre la plataforma? Prepara tus preguntas.
                        </p>
                        <p style="line-height: 15px;">&nbsp;</p>
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 26px;">
                            Tendremos un espacio para responder todas las consultas.
                            <br>
                            ¡Y no olvides revisar tu correo! Media hora antes del webinar
                            <br>
                            te enviaremos el enlace para unirte.
                        </p>
                        <p style="line-height: 28px;">&nbsp;</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>




<!-------------------------Button-------------------------------->
<tr class="bg-color-alt" align="center">
    <td align="center" valign="middle">
        <table width="550" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
            <tbody>
                <tr>
                    <td width="165" height="40" valign="top" style="border-top: 3px solid #ffffff; border-bottom: 3px solid #f1f4f4;">
                        <p style="line-height: 20px; background-color: #ffffff;">&nbsp;</p>
                        <p style="line-height: 20px; background-color: #f1f4f4;">&nbsp;</p>
                    </td>
                    <td width="220" height="40" align="center" style="color: #ffffff; background-color: #ff0000; border: 3px solid #ff0000; display: block; text-decoration: none;">
                        <a href=""
                        style="line-height: 34px; color: #ffffff; background-color: #ff0000; font-size: 16px; font-weight: bold; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width:100%; display:inline-block">
                            Regístrate Aquí
                        </a>
                    </td>
                    <td width="165" height="40" valign="top" style="border-top: 3px solid #ffffff; border-bottom: 3px solid #f1f4f4;">
                        <p style="line-height: 20px; background-color: #ffffff;">&nbsp;</p>
                        <p style="line-height: 20px; background-color: #f1f4f4;">&nbsp;</p>
                    </td>
                </tr>
            </tbody>
        </table> 
    </td>
</tr>


    <!-------------------------Title-------------------------------->
    <tr style="background-color: #f1f4f4;" align="center">
        <td align="center" valign="middle">
            <p style="line-height: 40px;">&nbsp;</p>
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                ¡Queremos oírte!
                <br>
                Cuéntanos qué temas te gustaría que abordemos en la capacitación.
            </p>
            <p style="line-height: 20px;">&nbsp;</p>
        </td>
    </tr>


<!-------------------------Button-------------------------------->
<tr class="bg-color-alt" align="center">
    <td align="center" valign="middle">
        <table width="550" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
            <tbody>
                <tr>
                    <td width="165" height="40" valign="top" style="border-top: 3px solid #f1f4f4; border-bottom: 3px solid #f1f4f4;">&nbsp;</td>
                    <td width="220" height="40" align="center" style="color: #ff0000; background-color: #f1f4f4; border: 3px solid #ff0000; display: block; text-decoration: none;">
                        <a href=""
                        style="line-height: 34px; color: #ff0000; background-color: #f1f4f4; font-size: 16px; font-weight: bold; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width:100%; display:inline-block">
                            Completa el formulario
                        </a>
                    </td>
                    <td width="165" height="40" valign="top" style="border-top: 3px solid #f1f4f4; border-bottom: 3px solid #f1f4f4;">&nbsp;</td>
                </tr>
            </tbody>
        </table> 
    </td>
</tr>


<!-- space --><tr class="bg-color-alt"><td><p style="line-height: 40px;">&nbsp;</p></td></tr><!-- space -->


<!-------------------------Footer Version 3 - Español-------------------------------->
<tr class="bg-color-footer" align="center">
    <td style="padding: 0 30px;" align="center" valign="middle">
        <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td height="80" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="auto" border="0">
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>


</table>
<!-- end email container -->


<!-- -----------------------Ruta online mail builder---------------------->
<!-- https://html-email-builder.pages.dev/images/others/other-4.png -->

</td>
</tr>
</table>


</center>


</body>
</html>
`
},

{
    id: 41,
    name: '41. Phishing Outlook',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-41.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Phones</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            mso-line-height-rule: exactly;
        }
        
        * {
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 600px;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }
    </style>
</head>

<body class="bg-color-general" style="margin: 0 auto; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
    <table width="600" class="container600" style="margin: 0 auto; max-width: 600px;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-general">
    <td width="600" style="text-align: center;">
    
    <!--email container-->
    <table width="600" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">


<!-------------------------Header-------------------------------->
<tr class="bg-color-normal" align="center">
    <td style="padding: 0 30px;" align="center" valign="middle">
        <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td height="100" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/headers/header-generic-1.png" alt="Logo ServiceNow" width="auto" height="53" border="0">
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>


    <!-------------------------Image-------------------------------->
    <tr style="background-color: #f1f4f4;" align="center">
        <td align="center" valign="middle">
            <img
                src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="portada"
                width="600" height="auto"
                style="display: block;"
            >
        </td>
    </tr>

    
    <!-------------------------Title-------------------------------->
    <tr style="background-color: #f1f4f4;" align="center">
        <td align="center" valign="middle">
            <p style="line-height: 40px;">&nbsp;</p>
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 24px; font-weight: bolder; color:#020202;">
                Ahora reportar el phishing es más fácil
            </p>
            <p style="line-height: 12px;">&nbsp;</p>
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                El correo electrónico es la principal vía de entrada de los ciberataques
                <br>
                que amenazan la seguridad de nuestra información.
                <br>
                Para evitar estos incidentes, contamos con un nuevo mecanismo:
                <br>
                <b>el botón "Report Mail" de Outlook.</b>
            </p>
            <p style="line-height: 45px;">&nbsp;</p>
        </td>
    </tr>



<!-------------------------Pill 1-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td align="center" valign="middle" bgcolor="#ffffff">
        <table width="600" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr valign="top" align="center">
                    <td bgcolor="#ffffff" valign="top">
                        <p style="line-height: 40px;">&nbsp;</p>
                        <img src="https://html-email-builder.pages.dev/images/icons/icon-info.png" alt="Icono autenticacion" height="74" width="74">
                        <p style="line-height: 12px;">&nbsp;</p>
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 20px; font-weight: bold; color:#020202; line-height: 26px;">
                            ¿Cómo funciona?
                        </p>
                        <p style="line-height: 12px;">&nbsp;</p>
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 26px;">
                            El phishing es un conjunto de técnicas para engañar a usuarios haciéndose pasar
                            <br>
                            por otras personas o empresas, con el fin de obtener información confidencial,
                            <br>
                            por eso es importante que sepamos cómo actuar ante estos casos.
                        </p>
                        <p style="line-height: 40px;">&nbsp;</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>



<!-------------------------Pill 2-------------------------------->
<tr class="bg-color-alt" align="center">
    <td align="center" valign="middle" bgcolor="#f1f4f4">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr valign="top" align="center">
                    <td width="600" bgcolor="#f1f4f4" valign="top">
                        <p style="line-height: 40px;">&nbsp;</p>
                        <img src="https://html-email-builder.pages.dev/images/icons/icon-info.png" alt="Icono autenticacion" height="74" width="74">
                        <p style="line-height: 12px;">&nbsp;</p>
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 20px; font-weight: bold; color:#020202; line-height: 26px;">
                            ¿Cómo proceder?
                        </p>
                        <p style="line-height: 6px;">&nbsp;</p>
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 26px;">
                            Si identificas un correo que podría ser malicioso, haz clic en:
                        </p>
                        <p style="line-height: 6px;">&nbsp;</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>



<!-------------------------Image-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td align="center" valign="middle">
        <img
            src="https://html-email-builder.pages.dev/images/icons/icon-shield.png" alt="portada"
            width="600" height="auto"
            style="display: block;"
        >
    </td>
</tr>

    <!------------------------ Empty Space --------------------------->
    <tr><td height="17" style="font-size:17px; line-height:17px;" bgcolor="#ffffff">&nbsp;</td></tr>


<tr bgcolor="#ffffff" align="center">
    <td align="center" valign="top">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr align="center" valign="top" bgcolor="#ffffff">
                    <td width="200" valign="top">
                        <img src="https://html-email-builder.pages.dev/images/others/other-6.png" alt="Icono autenticacion" width="85" height="82">
                        <p style="line-height: 16px;">&nbsp;</p>
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;"
                        >
                            Informar de mensaje
                        </p>
                    </td>
                    <td width="200" valign="top">
                        <img src="https://html-email-builder.pages.dev/images/others/other-1.png" alt="Icono autenticacion" width="85" height="82">
                        <p style="line-height: 16px;">&nbsp;</p>
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;"
                        >
                            Suplantación de identidad
                            <br>
                            (phishing)
                        </p>
                    </td>
                    <td width="200" valign="top">
                        <img src="https://html-email-builder.pages.dev/images/others/other-2.png" alt="Icono autenticacion" width="85" height="82">
                        <p style="line-height: 16px;">&nbsp;</p>
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;"
                        >
                            "Informar"
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>


    <!------------------------ Empty Space --------------------------->
    <tr><td height="17" style="font-size:17px; line-height:17px;" bgcolor="#ffffff">&nbsp;</td></tr>


<!-------------------------Pill 1-------------------------------->
<tr class="bg-color-alt" align="center">
    <td class="padding-x-big" align="center" valign="middle" bgcolor="#f1f4f4">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr valign="top" align="center">
                    <td valign="top">
                        <p style="line-height: 30px;">&nbsp;</p>
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 20px; font-weight: bold; color:#020202; line-height: 26px;">
                            De este modo, ayudas a detectar y analizar las amenazas para estar más protegidos.
                        </p>
                        <p style="line-height: 28px;">&nbsp;</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>




<!-- -----------------------Footer Version 3 - Español------------------------------ -->
<tr class="bg-color-footer" align="center">
    <td style="padding: 0 30px;" align="center" valign="middle">
        <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td height="80" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="auto" border="0">
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>



</table>
<!-- end email container -->


</td>
</tr>
</table>


</center>


</body>
</html>
`
},

{
    id: 47,
    name: '47. Notificación Teams',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-47.png`,
    code:
`

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Email</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            max-width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 100%;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        .padding-x-biggest               { padding-left: 50px; padding-right: 50px; }

        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-alt5                  { background-color: #343333; }
        .bg-color-alt6                  { background-color: #282727; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-blue1                 { background-color: #124FA8; } /* azul onedrive */
        .bg-color-blue2                 { background-color: #4C50C3; }
        .bg-color-blue3                 { background-color: #5B61DB; }
        .bg-color-blue4                 { background-color: #323884; }
        .bg-color-blue5                 { background-color: #1194E3; }

    </style>
</head>

<body style="min-width: 100%; margin: 0; padding: 0; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

    <center>
    <table width="100%" role="presentation" cellpadding="0" cellspacing="0">
    <tr>
    <td style="width: 600px; max-width: 600px; margin: 0 auto;">
    
    <!--email container-->
    <table class="container600" style="width: 600px; max-width: 600px; margin: 0 auto;" bgcolor="#f1f4f4" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0">



    <!-------------------------Header-------------------------------->
    <!-------------------------Header-------------------------------->
    <!-------------------------Header-------------------------------->
    <tr style="background-color: #ffffff;" align="center">
        <td style="padding: 10px 30px;" align="center" valign="middle">
            <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tbody><tr>
                    <td style="width: 33%;" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/headers/header-generic-1.png" alt="logo mail builder" width="auto" height="53" border="0">
                        </a>
                    </td>
                    <td style="width: 67%;" align="right" valign="middle">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 22px; font-weight: bolder; color:#A6A9A9; letter-spacing: 5px;">

                        </p>
                    </td>
                </tr>
            </tbody></table>
        </td>
    </tr>

                

    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <tr style="background-color: #f1f4f4;" align="center">
        <td align="center" valign="middle">
            <img
                src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="portada"
                width="600" height="auto"
                style="display: block;"
            >
        </td>
    </tr>

    
    <!-------------------------Title-------------------------------->
    <!-- space --><tr style="background-color: #f1f4f4;"><td style="padding: 20px 0;"></td></tr><!-- space -->

    <tr style="background-color: #f1f4f4;" align="center">
        <td align="center" valign="middle">
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 24px; font-weight: bolder; color:#020202;">
                Importante: notificaciones en Teams
            </p>
            <p style="line-height: 16px;">&nbsp;</p>
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
               ¿Has recibido una notificación a través de Teams <br>en tu terminal móvil con el siguiente texto?  
            </p>
        </td>
    </tr>

    <!-- space --><tr class="bg-color-alt"><td><p style="line-height: 20px;">&nbsp;</p></td></tr><!-- space -->
    <!-- space --><tr class="bg-color-alt"><td><p style="line-height: 20px;">&nbsp;</p></td></tr><!-- space -->

    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <!-------------------------Image-------------------------------->
    <tr style="background-color: #f1f4f4;" align="center">
        <td class="padding-x-big" align="center" valign="middle">
            <img
                src="https://html-email-builder.pages.dev/images/others/other-1.png" alt="portada"
                width="40%" height="auto"
            >
        </td>
    </tr>
<!-- space --><tr class="bg-color-alt"><td><p style="line-height: 20px;">&nbsp;</p></td></tr><!-- space -->


    <!-------------------------Top-------------------------------->
    <tr style="background-color: #f1f4f4;" align="center">
        <td align="center" valign="middle">
            <img
                src="https://html-email-builder.pages.dev/images/others/other-1.png" alt="portada"
                width="550" height="auto"
                style="display: block;"
            >
        </td>
    </tr>





<!-------------------------Pill 1-------------------------------->
<tr class="bg-color-alt" align="center">
    <td class="padding-x-big" align="center" valign="middle" bgcolor="#f1f4f4">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr valign="top" align="center">
                    <td class="padding-x-big" bgcolor="#ffffff" valign="top">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 22px; font-weight: bold; color:#020202; line-height: 22px;">
                            ¿Qué tienes que hacer?
                            <br>
                            <br>
                        </p>
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                            ¡Nada! Si has recibido esta notificación, no te alarmes, <b>no pasa nada</b>. Simplemente, ¡descártala!
                            <br>
                            <br>
                            Lamentamos las molestias que haya podido causarte. <br><br>
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>




<!-- space --><tr class="bg-color-alt"><td><p style="line-height: 40px;">&nbsp;</p></td></tr><!-- space -->


<!-------------------------Footer Version 3 - Español-------------------------------->
<!-------------------------Footer Version 3 - Español-------------------------------->
<!-------------------------Footer Version 3 - Español-------------------------------->
<tr style="background-color: #000000;" align="center">
    <td style="padding: 1px 30px;" align="center" valign="middle">
        <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td height="90" style="height: 90px;" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="auto" border="0" style="display: inline-block; vertical-align: middle;">
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>

                

</table>
<!-- end email container -->


</td>
</tr>
</table>


</center>

</body>

</html>
`
},

{
    id: 48,
    name: '48. Ciclo Calidad',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-48.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Phones</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            mso-line-height-rule: exactly;
        }
        
        * {
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 600px;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }
    </style>


</head>

<body class="bg-color-general" style="margin: 0 auto; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
    <table width="600" class="container600" style="margin: 0 auto; max-width: 600px;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-general">
    <td width="600" style="text-align: center;">
    
    <!--email container-->
    <table width="600" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">
    
    
    
<!-------------------------Header-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 4px 30px 0 30px;" align="center" valign="middle">
    <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td height="80" align="left" valign="middle">
                    <a href="https://example.com" target="_blank">
                        <img src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="Mail Builder" width="auto" height="53" border="0">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>

        
        
        
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/headers/header-quality-1.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Border-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 0;" align="center" valign="middle">
    <table
        style="border-top: 3px solid #ffffff;"
        width="100%"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr>

        
        
        
<!-------------------------Titular-------------------------------->
<tr bgcolor="#ff0000" align="center">
<td style="padding: 20px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 27px; line-height: 32px; font-weight: bold; color:#ffffff; margin: 0;">
                        Nuevo modelo de desarrollo
<br>
y calidad de aplicaciones
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
</td>
</tr>

        
        
        
<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 25px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; line-height: 22px; color:#020202; margin: 0;">
                    Hemos puesto en marcha un nuevo <b>Modelo de Desarrollo y Calidad de aplicaciones</b> para simplificar, agilizar y asegurar la calidad de nuestras soluciones. 
                    <br>
<br>
A partir de ahora y de forma progresiva, todos los nuevos proyectos de desarrollo y mantenimiento de aplicaciones adoptarán este nuevo modelo según su planificación, capacidad y prioridades.
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>

        
        
        
<!-------------------------Titular-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 30px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 27px; line-height: 22px; font-weight: bold; color:#020202; margin: 0;">
                        ¿En qué consiste?
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
</td>
</tr>

        
        
        
<!-----------------------------Banner Image and Title--------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 10px 0;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr align="center">
            <td width="600" align="center" valign="middle">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tbody>
                    <tr align="left" valign="middle">
                        <td width="86" style="padding: 10px;" bgcolor="#ffffff">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                                <tr valign="middle">
                                    <td>
                                        <img src="https://html-email-builder.pages.dev/images/icons/icon-info.png" alt="Chats" width="86" height="100" style="display: block;">
                                    </td>
                                </tr>
                            </tbody>
                            </table>
                        </td>
                        <td width="514" bgcolor="#ffffff" valign="middle" style="padding: 0 10px;">
                            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 18px; color:#020202; line-height: 18px; font-weight: bold;">
                                Nueva metodología para el desarrollo de aplicaciones
                            </p>
                            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 8px; color:#020202; line-height: 8px; font-weight: bold;">&nbsp;
                            </p>
                            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 14px; color:#020202; line-height: 20px;">
                                ●   Que incorpora buenas prácticas de gestión, roles, responsabilidades y entregables a lo largo del ciclo de vida de desarrollo.
                                <br>
                                ●   Alternativas de ciclos de vida agile o waterfall.
                                <br>
                                ●   Un ciclo de vida optimizado para la ejecución de evolutivos y correctivos.
                            </p>
                        </td>
                    </tr>
                </tbody>
                </table>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>

        
        
        
<!-------------------------Border-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 0;" align="center" valign="middle">
    <table
        style="border-top: 6px solid #f1f4f4;"
        width="100%"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr>

        
        
        
<!-----------------------------Banner Image and Title--------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 10px 0;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr align="center">
            <td width="600" align="center" valign="middle">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tbody>
                    <tr align="left" valign="middle">
                        <td width="86" style="padding: 10px;" bgcolor="#ffffff">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                                <tr valign="middle">
                                    <td>
                                        <img src="https://html-email-builder.pages.dev/images/icons/icon-info.png" alt="Chats" width="86" height="100" style="display: block;">
                                    </td>
                                </tr>
                            </tbody>
                            </table>
                        </td>
                        <td width="514" bgcolor="#ffffff" valign="middle" style="padding: 0 10px;">
                            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 18px; color:#020202; line-height: 18px; font-weight: bold;">
                                Un modelo de Aseguramiento de la Calidad
                            </p>
                            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 8px; color:#020202; line-height: 8px; font-weight: bold;">&nbsp;
                            </p>
                            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 14px; color:#020202; line-height: 22px;">
                                Establecemos estrategias de pruebas y actividades asociadas con el cumplimiento de los procesos y los entregables del proyecto.  
                            </p>
                        </td>
                    </tr>
                </tbody>
                </table>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>

        
        
        
<!-------------------------Border-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 0;" align="center" valign="middle">
    <table
        style="border-top: 6px solid #f1f4f4;"
        width="100%"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr>

        
        
        
<!-----------------------------Banner Image and Title--------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 10px 0;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr align="center">
            <td width="600" align="center" valign="middle">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tbody>
                    <tr align="left" valign="middle">
                        <td width="86" style="padding: 10px;" bgcolor="#ffffff">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                                <tr valign="middle">
                                    <td>
                                        <img src="https://html-email-builder.pages.dev/images/icons/icon-gear.png" alt="Chats" width="86" height="100" style="display: block;">
                                    </td>
                                </tr>
                            </tbody>
                            </table>
                        </td>
                        <td width="514" bgcolor="#ffffff" valign="middle" style="padding: 0 10px;">
                            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 18px; color:#020202; line-height: 18px; font-weight: bold;">
                                Nuevas herramientas de gestión
                            </p>
                            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 8px; color:#020202; line-height: 8px; font-weight: bold;">&nbsp;
                            </p>
                            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 14px; color:#020202; line-height: 22px;">
                                Adaptadas a los diferentes modelos de ciclo de vida e integradas con el resto de herramientas de gestión, desarrollo y automatización existentes en <span style="color: #ff0000; font-weight: bold; text-decoration: none;">Mail Builder</span>.
                            </p>
                        </td>
                    </tr>
                </tbody>
                </table>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>

        
        
        
<!-------------------------Titular-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 30px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 27px; line-height: 22px; font-weight: bold; color:#E20714; margin: 0;">
                        Nueva oficina de calidad
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
</td>
</tr>

        
        
        
<!-------------------------Border-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 0;" align="center" valign="middle">
    <table
        style="border-top: 3px solid #ffffff;"
        width="100%"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr>

        
        
        
<!-------------------------Texto-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 25px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; line-height: 22px; color:#020202; margin: 0;">
Para acompañarte en la aplicación de esta nueva metodología y herramientas,
<br>
dispones del soporte y apoyo del nuevo servicio de <b>Oficina de Calidad</b>,
<br>
que dará seguimiento y validación de las actividades
<br>
a lo largo del ciclo de vida.
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>

        
        
        
<!-------------------------Single Image and text WITHOUT PADDING-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 10px 0 0px 0;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr valign="top" align="center">
            <td width="600" bgcolor="#ffffff" valign="top" style="padding: 20px;">
                <img
                    src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
                    alt="portada"
                    width="70" height="auto"
                    style="display: block;"
                >
                <p style="line-height: 12px;">&nbsp;</p>
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
En las próximas semanas te invitaremos a sesiones informativas
<br>
para explicar y detallar el nuevo modelo. 
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>

        
        
        
<!-------------------------Single Image and text WITHOUT PADDING-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 0 0 20px 0;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr valign="top" align="center">
            <td width="600" bgcolor="#ffffff" valign="top" style="padding: 20px;">
                <img
                    src="https://html-email-builder.pages.dev/images/icons/icon-mail.png"
                    alt="portada"
                    width="70" height="auto"
                    style="display: block;"
                >
                <p style="line-height: 12px;">&nbsp;</p>
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
Si tienes alguna duda, escríbenos a
<br>
<a href="mailto:oficina.calidad@example.com"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">oficina.calidad@example.com</span></a>
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>

        
        
        
<!-- -----------------------Footer - Español e Ingles------------------------------ -->
<!-------------------------Footer-------------------------------->
<tr bgcolor="#000000" align="center">
<td style="padding: 0 30px 4px 30px;" align="center" valign="middle">
    <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td height="80" align="left" valign="middle">
                    <a href="https://example.com" target="_blank">
                        <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="40" border="0">
                        <!-- <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="40" border="0"> -->
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>

        
        
        
    
    
    
<!-- -----------------------Ruta online mail builder---------------------->
<!-- https://html-email-builder.pages.dev/images/others/other-5.png -->


<!-- -----------------------Ruta local ---------------------->
<!-- ./img/ -->


<!-- -----------------------Link con estilo ---------------------->
<!-- <a href="mailto:windows10upgrades@example.com">
    <span style="color: #ff0000; font-weight: bold; text-decoration: underline;">windows10upgrades@example.com</span>
</a> -->

<!-- -----------------------Nueva linea ---------------------->
<!-- <br> -->


<!-- -----------------------Texto en Negrita---------------------->
<!-- <b>Texto en negrita</b> -->


<!-- -----------------------Texto en Color---------------------->
<!-- <span style="color: #ff0000;">windows10upgrades@example.com</span> -->



<!-- -----------------------Espacio entre bloques---------------------->
<!-- <tr style="background-color: #ffffff"><td><p style="line-height: 40px;">&nbsp;</p></td></tr> -->

</table>
<!-- end email container -->


</td>
</tr>
</table>


</center>





</body>
</html>
`
},

{
    id: 49,
    name: '49. Liberar Espacio En Disco',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-49.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Phones</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            mso-line-height-rule: exactly;
        }
        
        * {
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 600px;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }
    </style>


</head>

<body class="bg-color-general" style="margin: 0 auto; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
    <table width="600" class="container600" style="margin: 0 auto; max-width: 600px;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-general">
    <td width="600" style="text-align: center;">
    
    <!--email container-->
    <table width="600" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">
    
    
    
<!-------------------------Header-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 4px 30px;" align="center" valign="middle">
    <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td height="80" align="left" valign="middle">
                    <a href="https://example.com" target="_blank">
                        <img src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="Mail Builder" width="auto" height="53" border="0">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>


        
        
        
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/headers/header-update-1.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Border-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 0;" align="center" valign="middle">
    <table
        style="border-top: 3px solid #ffffff;"
        width="100%"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr>

        
        
        
<!-------------------------Titular-------------------------------->
<tr bgcolor="#E20714" align="center">
<td style="padding: 20px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 28px; line-height: 30px; color:#ffffff; margin: 0; font-weight: bold">
                        Libera espacio en tu disco
<br>
para la actualización de Windows 10
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
</td>
</tr>

        
        
        
<!-------------------------Texto-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 25px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; line-height: 22px; color:#020202; margin: 0;">
                    Para poder actualizar el sistema operativo de tu ordenador,
                    <br>
                    necesitamos que tengas al menos <b>30 GB de espacio libre</b>
                    <br>
en tu Unidad de disco C.
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>

        
        
        
<!-------------------------Single Image and text WITHOUT PADDING-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 0 0;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr valign="top" align="center">
            <td width="600" bgcolor="#f1f4f4" valign="top" style="padding: 20px;">
                <img
                    src="https://html-email-builder.pages.dev/images/others/other-1.png"
                    alt="portada"
                    width="70" height="auto"
                    style="display: block;"
                >
                <p style="line-height: 12px;">&nbsp;</p>
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
                    <b>Es importante que liberes espacio cuanto antes,</b>
                    <br>
<b>seleccionando las carpetas y archivos que ya no necesitas,</b>
<br>
<b>ya que en las próximas semanas se procederá al borrado automático.</b>
<b>Así evitarás perder tus archivos.</b>
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>

        
        
        
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-2.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Titular y Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 30px 20px" align="center" valign="middle">
    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 18px; color:#020202; font-weight: bold">
        Liberador de espacio en disco
    </p>
    <p style="line-height: 15px;">&nbsp;</p>
    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
        Para abrir la herramienta de Windows, <b>"Liberador de espacio en disco",</b>
<br>
abre el explorador de Windows, haz clic derecho en la Unidad C:
<br>
y escoge <b>"Propiedades".</b>
        <br>
<br>
En la pestaña General, pulsa el botón <b>"Liberar espacio",</b>
<br>
selecciona las carpetas y archivos que desees eliminar
<br>
y haz clic en aceptar.
        <br>
    </p>
</td>
</tr>

        
        
        
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-1.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-6.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Titular y Texto-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 30px 20px" align="center" valign="middle">
    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 18px; color:#020202; font-weight: bold">
        Archiva o elimina documentos que ya no uses
    </p>
    <p style="line-height: 15px;">&nbsp;</p>
    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
Si tienes fotos, música, vídeos u otros archivos que deseas conservar,
<br>
puedes guardarlos en medios extraíbles, como un disco externo o una unidad
<br>
USB. También puedes hacer una limpieza de tu escritorio, donde solemos
<br>
guardar cualquier tipo de archivos.
    </p>
</td>
</tr>

        
        
        
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-5.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Titular y Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 30px 20px" align="center" valign="middle">
    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 18px; color:#020202; font-weight: bold">
        Carpetas personales
    </p>
    <p style="line-height: 15px;">&nbsp;</p>
    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
Revisa las carpetas personales o <b>"Temp"</b> y elimina lo que ya no uses.
    </p>
</td>
</tr>

        
        
        
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-5.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Titular y Texto-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 30px 20px" align="center" valign="middle">
    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#020202; line-height: 22px;">
        Lamentamos las molestias que esto pueda ocasionar y agradecemos tu cooperación.
        <br>
        Si tienes alguna duda, contacta con <a href="https://example.com"><span style="color: #ff0000; font-weight: bold; text-decoration: underline;">ServiceNow</span></a>.
    </p>
</td>
</tr>

        
        
        
<!-- -----------------------Footer - Español e Ingles------------------------------ -->
<!-------------------------Footer-------------------------------->
<tr bgcolor="#000000" align="center">
<td style="padding: 0 30px 4px 30px;" align="center" valign="middle">
    <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td height="80" align="left" valign="middle">
                    <a href="https://example.com" target="_blank">
                        <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="40" border="0">
                        <!-- <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="40" border="0"> -->
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>

        
        
        
    
    
    
<!-- -----------------------Ruta online mail builder---------------------->
<!-- https://html-email-builder.pages.dev/images/others/other-5.png -->


<!-- -----------------------Ruta local ---------------------->
<!-- ./img/ -->


<!-- -----------------------Link con estilo ---------------------->
<!-- <a href="mailto:windows10upgrades@example.com">
    <span style="color: #ff0000; font-weight: bold; text-decoration: underline;">windows10upgrades@example.com</span>
</a> -->

<!-- -----------------------Nueva linea ---------------------->
<!-- <br> -->


<!-- -----------------------Texto en Negrita---------------------->
<!-- <b>Texto en negrita</b> -->


<!-- -----------------------Texto en Color---------------------->
<!-- <span style="color: #ff0000;">windows10upgrades@example.com</span> -->



<!-- -----------------------Espacio entre bloques---------------------->
<!-- <tr style="background-color: #ffffff"><td><p style="line-height: 40px;">&nbsp;</p></td></tr> -->

</table>
<!-- end email container -->


</td>
</tr>
</table>


</center>





</body>
</html>
`
},

{
    id: 52,
    name: '52. Migración Skype Teams',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-52.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Phones</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            mso-line-height-rule: exactly;
        }
        
        * {
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 600px;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt0                   { background-color: #e8eaea; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }
    </style>


</head>

<body class="bg-color-general" style="margin: 0 auto; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
    <table width="600" class="container600" style="margin: 0 auto; max-width: 600px;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-general">
    <td width="600" style="text-align: center;">
    
    <!--email container-->
    <table width="600" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">
    
    
    
<!-------------------------Header-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 4px 30px 0 30px;" align="center" valign="middle">
    <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td height="80" align="left" valign="middle">
                    <a href="https://example.com" target="_blank">
                        <img src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="Mail Builder" width="auto" height="53" border="0">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>

        
        
        
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#e8eaea" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/headers/header-generic-1.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Border-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 0;" align="center" valign="middle">
    <table
        style="border-bottom: 2px solid #ffffff;"
        width="600"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr>
<!-------------------------Titular-------------------------------->
<tr bgcolor="#E20714" align="center">
<td style="padding: 25px 20px 0 20px;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 26px; line-height: 30px; color:#FFFFFF; margin: 0; letter-spacing: 4px;">
                        ¡HOLA TEAMS! ADIÓS SKYPE
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
</td>
</tr>
<tr bgcolor="#E20714" align="center">
<td style="padding: 10px 0 25px 0;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 18px; line-height: 22px; color:#FFFFFF; margin: 0;">
                        La próxima semana <span style="color: #ffffff; font-weight: bold;">Microsoft Teams</span> reemplazará completamente
                        <br>
                        a Skype for Business para que puedas trabajar de manera
                        <br>
                        más colaborativa con tus equipos.
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
</td>
</tr>

        
        
        
<!-------------------------Texto-------------------------------->
<tr bgcolor="#e8eaea" align="center">
<td style="padding: 25px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; line-height: 22px; color:#020202; margin: 0;">
                    Se trata de una gran noticia ya que con <span style="color: #020202; font-weight: bold;">Teams</span> puedes contar con todas
                    <br>
                    las funcionalidades de Skype, ¡y mucho más!
                    <br>
                    <br>
                    Muy pronto recibirás más información para que descubras
                    <br>
                    todo el potencial de <span style="color: #020202; font-weight: bold;">Teams</span>, pero queremos que ya empieces a aprovechar
                    <br>
                    todos los beneficios que tiene para ofrecerte, como:
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>


<!-------------------------50% table with image and text-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr valign="top" align="center">
            <td width="297" bgcolor="#323232" valign="top">
                <img src="https://html-email-builder.pages.dev/images/icons/icon-info.png" 
                    alt="improved" style="display: block;"
                    width="297" height="170"
                >
                <p style="line-height: 16px;">&nbsp;</p>
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#ffffff; line-height: 16px;">
                    Videollamadas mejoradas
                </p>
                <p style="line-height: 16px;">&nbsp;</p>
            </td>
            <td width="6">

            </td>
            <td width="297" bgcolor="#323232" valign="top">
                <img src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
                    alt="files" style="display: block;"
                    width="297" height="170"
                >
                <p style="line-height: 5px;">&nbsp;</p>
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#ffffff; line-height: 22px;">
                    Todos tus chats, archivos y aplicaciones
                    <br>
                    en el mismo lugar
                </p>
                <p style="line-height: 5px;">&nbsp;</p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>

<!-------------------------Border-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 0;" align="center" valign="middle">
    <table
        style="border-bottom: 6px solid #ffffff;"
        width="600"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr>

<!-------------------------50% table with image and text-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr valign="top" align="center">
            <td width="297" bgcolor="#323232" valign="top">
                <img src="https://html-email-builder.pages.dev/images/icons/icon-info.png" 
                    alt="improved" style="display: block;"
                    width="297" height="170"
                >
                <p style="line-height: 16px;">&nbsp;</p>
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#ffffff; line-height: 16px;">
                    Integración completa con Microsoft Office
                </p>
                <p style="line-height: 16px;">&nbsp;</p>
            </td>
            <td width="6">

            </td>
            <td width="297" bgcolor="#323232" valign="top">
                <img src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
                    alt="files" style="display: block;"
                    width="297" height="170"
                >
                <p style="line-height: 5px;">&nbsp;</p>
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; color:#ffffff; line-height: 22px;">
                    Organizar tu trabajo de una manera
                    <br>
                    más simple
                </p>
                <p style="line-height: 5px;">&nbsp;</p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>


<tr bgcolor="#ffffff" align="center">
<td style="padding: 20px;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
        <tr valign="top" align="center">
            <td width="456" bgcolor="#ffffff" valign="top" style="padding: 3px 0 0 0;">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 18px; line-height: 22px; color:#020202; margin: 0;">
                    ¡Y muchas más!
                </p>
            </td>
        </tr>
        </tbody>
    </table>
</td>
</tr>




<!-------------------------Triple Image, Triple Text WITHOUT SPACES and PADDING-------------------------------->
<tr bgcolor="#e8eaea" align="center">
<td style="padding: 30px 0 0 0;" align="center" valign="middle">
<table role="presentation" cellspacing="0" cellpadding="0" border="0">
<tbody>
    <tr valign="top" align="center">
        <td width="93" bgcolor="#e8eaea" valign="top" style="padding: 0 0;">
            <img src="https://html-email-builder.pages.dev/images/others/other-5.png"
            alt="files" style="display: block;"
            width="93" height="auto"
            >
        </td>
        <td width="414" bgcolor="#e8eaea" valign="top" style="padding: 0;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr valign="top" align="center">
                    <td width="414" bgcolor="#e8eaea" valign="top" style="padding: 3px 0 0 0;">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 18px; font-weight: bold; line-height: 22px; color:#020202; margin: 0;">
                            ¿Cómo me afecta este cambio?
                        </p>
                    </td>
                </tr>
            </tbody>
            </table>

            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr valign="top" align="center">
                    <td width="414" bgcolor="#e8eaea" valign="top" style="padding: 10px 0 20px 0;">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; line-height: 18px; color:#020202; margin: 0;">
                            Consulta el documento con las preguntas
                            <br>
                            más frecuentes sobre la migración.
                        </p>
                    </td>
                </tr>
            </tbody>
            </table>

            <table style="-webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
                <tbody>
                    <tr>
                        <td width="414" height="45" align="center" style="color: #ff0000; background-color: #e8eaea; border: 3px solid #ff0000; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; display: block; text-decoration: none;">
                            <a href="https://example.com"
                            style="line-height: 39px; color: #ff0000; background-color: #e8eaea; font-size: 15px; font-weight: bold; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width:100%; display:inline-block; letter-spacing: 2px">
                                CONSULTA LAS PREGUNTAS FRECUENTES
                            </a>
                        </td> 
                    </tr>
                </tbody>
            </table>

            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tbody>
                    <tr valign="top" align="center">
                        <td width="414" bgcolor="#e8eaea" valign="top" style="padding: 20px 0 5px 0;">
                            <img src="https://html-email-builder.pages.dev/images/others/other-3.png"
                            alt="files" style="display: block;"
                            width="45" height="auto"
                            >
                        </td>
                    </tr>
                </tbody>
            </table>

            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr valign="top" align="center">
                    <td width="25" bgcolor="#e8eaea" valign="top" style="padding: 0 0 0 0;">
                        <img src="https://html-email-builder.pages.dev/images/others/other-6.png"
                        alt="files" style="display: block;"
                        width="37" height="11"
                        >
                    </td>
                    <td width="406" bgcolor="#e8eaea" valign="top" style="padding: 0 0 0 0;">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 18px; font-weight: bold; color:#020202; margin: 0;">
                            Conviértete en un experto en Teams
                        </p>
                    </td>
                    <td width="25" bgcolor="#e8eaea" valign="top" style="padding: 0 0 0 0;">
                        <img src="https://html-email-builder.pages.dev/images/others/other-2.png"
                        alt="files" style="display: block;"
                        width="37" height="11"
                        >
                    </td>
                </tr>
            </tbody>
            </table>
        </td>
        <td width="93" bgcolor="#e8eaea" valign="top" style="padding: 0 0 0 0;">
            <img src="https://html-email-builder.pages.dev/images/others/other-1.png"
            alt="files" style="display: block;"
            width="93" height="238"
            >
        </td>
    </tr>
</tbody>
</table>
</td>
</tr>









        
        
        
<!-------------------------Texto-------------------------------->
<tr bgcolor="#e8eaea" align="center">
<td style="padding: 20px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; line-height: 22px; color:#020202; margin: 0;">
                    ¿Quieres sacar el máximo partido a la herramienta? 
                    <br>
                    Realiza ya el curso en el Campus Virtual.
                
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>

        
        
        
<!-------------------------Primary Button-------------------------------->
<!--  Define width, height and bgcolor in TD attributes. 
TD height and color should be equal to A line-height and color.
Border radius probably won't work but it won't hurt either. -->
<tr bgcolor="#e8eaea" align="center">
<td style="padding: 0 0 20px 0;" align="center" valign="middle">
    <table style="-webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
    <tbody>
        <tr> 
            <td width="250" height="45" bgcolor="#ff0000" align="center" style="color: #ffffff; border: 3px solid #ff0000; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; text-decoration: none; display: block;">
                <a href="https://example.com"
                style="line-height: 39px; color: #ffffff; background-color: #ff0000; font-size: 15px; font-weight: bold; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width: 100%; display: inline-block; letter-spacing: 3px;">
                    REALIZA EL CURSO
                </a>
            </td> 
        </tr>
    </tbody>
    </table> 
</td>
</tr>

<!-------------------------Imagen-------------------------------->
<tr bgcolor="#e8eaea" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-2.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>



<tr bgcolor="#ffffff" align="center">
<td style="padding: 20px 0 30px 0;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; line-height: 22px; color:#020202; margin: 0;">
                        Puedes encontrar información adicional en el espacio 
                        <br>
                        <a href="https://example.com">
                            <span style="color: #ff0000; font-weight: bold; text-decoration: underline;">Teams de Intranet</span>
                        </a>
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
</td>
</tr>



<!-------------------------Teams-------------------------------->
<tr bgcolor="#e8eaea" align="center">
<td style="padding: 20px 20px 0 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
        <img
            src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png"
            alt="portada"
            width="40" height="auto"
            style="display: block;"
        >
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>
<!-------------------------Texto-------------------------------->
<tr bgcolor="#e8eaea" align="center">
<td style="padding: 5px 20px 0 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 19px; line-height: 20px; letter-spacing: 3px;color:#020202; margin: 0;">
                    <span style="color: #5359a7; font-weight: bold; font-size: 20px; letter-spacing: 3px;text-decoration: none;">TEAMS</span></a>
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>
<!-------------------------Texto-------------------------------->
<tr bgcolor="#e8eaea" align="center">
<td style="padding: 5px 20px 35px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; line-height: 16px; letter-spacing: 3px;color:#020202; margin: 0;">
LA EVOLUCIÓN DEL TRABAJO COLABORATIVO
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>

        
        
        
<!-- -----------------------Footer - Español e Ingles------------------------------ -->
<!-------------------------Footer-------------------------------->
<tr bgcolor="#000000" align="center">
<td style="padding: 0 30px 4px 30px;" align="center" valign="middle">
    <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td height="60" align="left" valign="middle">
                    <a href="https://example.com" target="_blank">
                        <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="40" border="0">
                        <!-- <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="40" border="0"> -->
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>

        
        
        
    
    
    
<!-- -----------------------Ruta online mail builder---------------------->
<!-- https://html-email-builder.pages.dev/images/others/other-5.png -->


<!-- -----------------------Ruta local ---------------------->
<!-- ./img/ -->


<!-- -----------------------Link con estilo ---------------------->
<!-- <a href="mailto:windows10upgrades@example.com">
    <span style="color: #ff0000; font-weight: bold; text-decoration: underline;">windows10upgrades@example.com</span>
</a> -->

<!-- -----------------------Nueva linea ---------------------->
<!-- <br> -->


<!-- -----------------------Texto en Negrita---------------------->
<!-- <b>Texto en negrita</b> -->


<!-- -----------------------Texto en Color---------------------->
<!-- <span style="color: #ff0000;">windows10upgrades@example.com</span> -->



<!-- -----------------------Espacio entre bloques---------------------->
<!-- <tr style="background-color: #ffffff"><td><p style="line-height: 40px;">&nbsp;</p></td></tr> -->

</table>
<!-- end email container -->


</td>
</tr>
</table>


</center>





</body>
</html>
`
},

{
    id: 53,
    name: '53. Lanzamiento ServiceNow Chile',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-53.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Phones</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            mso-line-height-rule: exactly;
        }
        
        * {
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 600px;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }
    </style>


</head>

<body class="bg-color-general" style="margin: 0 auto; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
    <table width="600" class="container600" style="margin: 0 auto; max-width: 600px;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-general">
    <td width="600" style="text-align: center;">
    
    <!--email container-->
    <table width="600" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">
    
    
    
<!-------------------------Header-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 4px 30px 0 30px;" align="center" valign="middle">
    <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td height="80" align="left" valign="middle">
                    <a href="https://example.com" target="_blank">
                        <img src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="Mail Builder" width="auto" height="53" border="0">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>

        
        
        
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Titular-------------------------------->
<tr bgcolor="#E20714" align="center">
<td style="padding: 30px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 26px; line-height: 28px; color:#FFFFFF; margin: 0;">
                        ¡TU NUEVO SERVICENOW YA ESTÁ DISPONIBLE!
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
</td>
</tr>

        
        
        
<!-------------------------Texto-------------------------------->
<tr bgcolor="#e8eaea" align="center">
<td style="padding: 20px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; line-height: 22px; color:#020202; margin: 0;">
A partir de hoy cuentas con un nuevo portal para gestionar tus incidencias
<br>
y peticiones TIC. Con ServiceNow podrás solicitar asistencia,
<br>
gestionar tus tickets y consultar material de ayuda.
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>

        
        
        

        
        
        
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/divider-transparent.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Titular-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 10px 10px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 26px; line-height: 28px; color:#020202; margin: 0;">
                        ¿COMO UTILIZAR SERVICENOW?
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
</td>
</tr>

        
        
        
<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 2px 0 30px 0" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; line-height: 22px; color:#020202; margin: 0;">
En este tutorial aprenderás como...
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>

        
        
        
<!-------------------------Triple Column Banner-------------------------------->
<tr bgcolor="#e8eaea" align="center">
<td align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr valign="top" align="left">
                <td width="80" height="80" valign="middle">
                    <img src="https://html-email-builder.pages.dev/images/others/other-2.png" style="display: block;" alt="number" width="80" height="80">
                </td>
                <td width="520" height="80" valign="middle" style="padding: 0 10px">
                            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 15px; color:#020202; line-height: 22px;">
                                Registrar una incidencia si alguno de tus elementos TIC deja de funcionar.
                            </p>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>

        
        
        
<!-------------------------Triple Column Banner-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="border-top: 1px solid #ffffff; border-bottom: 1px solid #ffffff;">
        <tbody>
            <tr valign="top" align="left">
                <td width="80" height="80" valign="middle">
                    <img src="https://html-email-builder.pages.dev/images/others/other-6.png" style="display: block;" alt="number" width="80" height="80">
                </td>
                <td width="520" height="80" valign="middle" style="padding: 0 10px">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 15px; color:#020202; line-height: 22px;">
                        Realizar una petición de un nuevo dispositivo, acceso o aplicación.
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>

        
        
        
<!-------------------------Triple Column Banner-------------------------------->
<tr bgcolor="#e8eaea" align="center">
<td align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr valign="top" align="left">
                <td width="80" height="80" valign="middle">
                    <img src="https://html-email-builder.pages.dev/images/others/other-4.png" style="display: block;" alt="number" width="80" height="80">
                </td>
                <td width="520" height="80" valign="middle" style="padding: 0 10px">
                            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 15px; color:#020202; line-height: 22px;">
                                Crear una solicitud en nombre de otro usuario y aprobar o rechazar peticiones si ese es tu caso.
                            </p>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>

        
        
        
<!-------------------------Primary Button-------------------------------->
<!--  Define width, height and bgcolor in TD attributes. 
TD height and color should be equal to A line-height and color.
Border radius probably won't work but it won't hurt either. -->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 30px 20px 35px 20px;" align="center" valign="middle">
    <table style="-webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
    <tbody>
        <tr> 
            <td width="300" height="45" bgcolor="#ff0000" align="center" style="color: #ffffff; border: 3px solid #ff0000; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; text-decoration: none; display: block;">
                <a href="https://example.com"
                style="line-height: 39px; color: #ffffff; background-color: #ff0000; font-size: 15px; font-weight: bold; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width:100%; display:inline-block">
                    VER VÍDEO TUTORIAL
                </a>
            </td> 
        </tr>
    </tbody>
    </table>
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td style="padding: 35px 20px 20px 20px;" align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 18px; line-height: 22px; font-weight: bold; color:#020202; margin: 0;">
¿A qué esperas para descrubrir tu nueva herramienta TIC?
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    <table style="-webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
        <tbody>
        <tr>
            <td width="300" height="45" align="center" style="color: #ff0000; background-color: #ffffff; border: 3px solid #ff0000; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; display: block; text-decoration: none;">
                <a href="https://example.com"
                    style="line-height: 39px; color: #ff0000; background-color: #ffffff; font-size: 16px; font-weight: bold; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width:100%; display:inline-block">
                    ¡ENTRA YA EN SERVICENOW!
                </a>
            </td> 
        </tr>
        </tbody>
    </table> 
</td>
</tr>


        
        
        
<!-- -----------------------Footer - Español e Ingles------------------------------ -->
<!-------------------------Footer-------------------------------->
<tr bgcolor="#000000" align="center">
<td style="padding: 0 30px 4px 30px;" align="center" valign="middle">
    <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td height="80" align="left" valign="middle">
                    <a href="https://example.com" target="_blank">
                        <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="40" border="0">
                        <!-- <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="40" border="0"> -->
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>

        
        
        
    
    
    
<!-- -----------------------Ruta online mail builder---------------------->
<!-- https://html-email-builder.pages.dev/images/others/other-5.png -->


<!-- -----------------------Ruta local ---------------------->
<!-- ./img/ -->


<!-- -----------------------Link con estilo ---------------------->
<!-- <a href="mailto:windows10upgrades@example.com">
    <span style="color: #ff0000; font-weight: bold; text-decoration: underline;">windows10upgrades@example.com</span>
</a> -->

<!-- -----------------------Nueva linea ---------------------->
<!-- <br> -->


<!-- -----------------------Texto en Negrita---------------------->
<!-- <b>Texto en negrita</b> -->


<!-- -----------------------Texto en Color---------------------->
<!-- <span style="color: #ff0000;">windows10upgrades@example.com</span> -->



<!-- -----------------------Espacio entre bloques---------------------->
<!-- <tr style="background-color: #ffffff"><td><p style="line-height: 40px;">&nbsp;</p></td></tr> -->

</table>
<!-- end email container -->


</td>
</tr>
</table>


</center>





</body>
</html>
`
},

{
    id: 54,
    name: '54. Recordatorio Encuesta ServiceNow',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-54.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Phones</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            mso-line-height-rule: exactly;
        }
        
        * {
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 600px;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }
    </style>


</head>

<body class="bg-color-general" style="margin: 0 auto; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
    <table width="600" class="container600" style="margin: 0 auto; max-width: 600px;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-general">
    <td width="600" style="text-align: center;">
    
    <!--email container-->
    <table width="600" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">
    
    
    
<!-------------------------Header-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 4px 30px 0 30px;" align="center" valign="middle">
    <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td height="80" align="left" valign="middle">
                    <a href="https://example.com" target="_blank">
                        <img src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="Mail Builder" width="auto" height="53" border="0">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>

        
        
        
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Titular-------------------------------->
<tr bgcolor="#E20714" align="center">
<td style="padding: 15px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 26px; line-height: 28px; color:#FFFFFF; margin: 0;">
                        ¡AÚN ESTÁS A TIEMPO!
                        <br>
                        PARTICIPA EN LA ENCUESTA DE SERVICENOW.
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
</td>
</tr>

        
        
        
<!-------------------------Texto-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 30px 20px 20px 20px;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; line-height: 22px; color:#020202; margin: 0;">
Necesitamos tu opinión para poder seguir mejorando la herramienta que rediseñamos en abril, con el objetivo de hacerla más fácil e intuitiva.
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>

        
        
        

        
        
        
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/divider-transparent.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Titular-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 10px 10px 0 10px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 26px; line-height: 28px; color:#020202; margin: 0; letter-spacing: 3px;">
                        ¿NOS AYUDAS?
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
</td>
</tr>



<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 20px 0 30px 0" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; line-height: 22px; color:#020202; margin: 0;">
Prometemos que no te llevará más de 2 minutos contestarla, es muy breve.
<br>
¿Nos ayudarías para poder seguir ayudándote?
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>


<!-------------------------Primary Button-------------------------------->
<!--  Define width, height and bgcolor in TD attributes. 
TD height and color should be equal to A line-height and color.
Border radius probably won't work but it won't hurt either. -->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 0 20px 30px 20px;" align="center" valign="middle">
    <table style="-webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
    <tbody>
        <tr> 
            <td width="300" height="45" bgcolor="#ff0000" align="center" style="color: #ffffff; border: 3px solid #ff0000; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; text-decoration: none; display: block;">
                <a href="https://example.com"
                style="line-height: 39px; color: #ffffff; background-color: #ff0000; font-size: 15px; font-weight: normal; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width:100%; display:inline-block">
                    QUIERO COMPARTIR MI OPINIÓN
                </a>
            </td> 
        </tr>
    </tbody>
    </table>
</td>
</tr>





<!-------------------------Texto-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 30px 0" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 12px; line-height: 19px; color:#504e4e; margin: 0;">
                    Por favor, no compartas este email.
                    <br>
                    Si tienes problemas de acceso, puedes hacer clic aquí:
                    <br>
                    <a href="https://example.com">
                        <span style="color: #020202; font-weight: bold; text-decoration: none;">https://example.com</span>
                    </a>
                    <br>
                    <br>
                    Te garantizamos el anonimato y confidencialidad de tus respuestas.
                    <br>
                    La encuesta y toda la información la gestiona y almacena Survey Partner, que nos facilita informes agregados.
                    <br>
                    Los criterios para reportar información son muy estrictos,
                    <br>
                    evitando identificar personas con respuestas.
                    
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>



<!-- -----------------------Footer - Español e Ingles------------------------------ -->
<!-------------------------Footer-------------------------------->
<tr bgcolor="#000000" align="center">
<td style="padding: 0 30px 4px 30px;" align="center" valign="middle">
    <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td height="80" align="left" valign="middle">
                    <a href="https://example.com" target="_blank">
                        <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="40" border="0">
                        <!-- <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="40" border="0"> -->
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>

        
        
        
    
    
    
<!-- -----------------------Ruta online mail builder---------------------->
<!-- https://html-email-builder.pages.dev/images/others/other-5.png -->


<!-- -----------------------Ruta local ---------------------->
<!-- ./img/ -->


<!-- -----------------------Link con estilo ---------------------->
<!-- <a href="mailto:windows10upgrades@example.com">
    <span style="color: #ff0000; font-weight: bold; text-decoration: underline;">windows10upgrades@example.com</span>
</a> -->

<!-- -----------------------Nueva linea ---------------------->
<!-- <br> -->


<!-- -----------------------Texto en Negrita---------------------->
<!-- <b>Texto en negrita</b> -->


<!-- -----------------------Texto en Color---------------------->
<!-- <span style="color: #ff0000;">windows10upgrades@example.com</span> -->



<!-- -----------------------Espacio entre bloques---------------------->
<!-- <tr style="background-color: #ffffff"><td><p style="line-height: 40px;">&nbsp;</p></td></tr> -->

</table>
<!-- end email container -->


</td>
</tr>
</table>


</center>





</body>
</html>
`
},

{
    id: 56,
    name: '56. Lanzamiento ServiceNow',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-56.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Phones</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            mso-line-height-rule: exactly;
        }
        
        * {
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 600px;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt0                   { background-color: #e8eaea; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }
    </style>


</head>

<body class="bg-color-general" style="margin: 0 auto; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
    <table width="600" class="container600" style="margin: 0 auto; max-width: 600px;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-general">
    <td width="600" style="text-align: center;">
    
    <!--email container-->
    <table width="600" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">
    
    
    
<!-------------------------Header-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 4px 30px 0 30px;" align="center" valign="middle">
    <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td height="80" align="left" valign="middle">
                    <a href="https://example.com" target="_blank">
                        <img src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="Mail Builder" width="auto" height="53" border="0">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>

        
        
        
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#e8eaea" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Border-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 0;" align="center" valign="middle">
    <table
        style="border-bottom: 2px solid #ffffff;"
        width="600"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr>
<!-------------------------Titular-------------------------------->
<tr bgcolor="#E20714" align="center">
<td style="padding: 15px 0px 15px 0px;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 26px; line-height: 30px; color:#FFFFFF; margin: 0; letter-spacing: 4px;">
                        ¡SÚMATE A LA EVOLUCIÓN <br>DEL TRABAJO CON TEAMS!
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
</td>
</tr>

        
        
        
<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 35px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#020202; margin: 0;">
                    Impulsa el trabajo colaborativo y la eficiencia en tus equipos siguiendo la nueva campaña <b>"Teams: la evolución del trabajo colaborativo"</b>. 
                    <br><br>A partir de hoy y durante los próximos tres meses, recibirás consejos útiles <br>y trucos para aprovechar al máximo Microsoft Teams y el conjunto de herramientas a tu disposición que favorecen el trabajo en equipo.

     
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>




<tr bgcolor="#e8eaea" align="center">
<td style="padding: 20px;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
        <tr valign="top" align="center">
            <td width="456" valign="top" style="padding: 3px 0 0 0;">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 24px; line-height: 30px; color:#020202; margin: 0; letter-spacing: 3px;">
                    ¿QUIERES SABER CÓMO?
                </p>
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 24px; line-height: 16px; color:#020202; margin: 0; letter-spacing: 3px;">
                    &nbsp;
                </p>
                <a href="mailto:windows10upgrades@example.com" target="_blank">
                    <img
                    src="https://html-email-builder.pages.dev/images/others/other-5.png"
                    alt="portada"
                    width="540" height="auto"
                    style="display: block;"
                >
                </a>
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; line-height: 22px; color:#020202; margin: 0;">
                    Sigue la campaña y recorre los cuatro conceptos <br>que te harán evolucionar la forma en que trabajas:<br> <b>colaboración, eficiencia, autonomía y movilidad.</b>
                </p>
            </td>
        </tr>
        </tbody>
    </table>
</td>
</tr>




<!-------------------------Triple Image, Triple Text WITHOUT SPACES and PADDING-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 0 0 0 0;" align="center" valign="middle">
<table role="presentation" cellspacing="0" cellpadding="0" border="0">
<tbody>
    <tr valign="top" align="center">
        <td width="78" bgcolor="#ffffff" valign="top" style="padding: 0 0;">
            <img src="https://html-email-builder.pages.dev/images/others/other-2.png"
            alt="files" style="display: block;"
            width="78" height="140"
            >
        </td>
        <td width="444" bgcolor="#ffffff" valign="middle" style="padding: 0;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr valign="middle" align="center">
                    <td width="444" bgcolor="#ffffff" valign="middle" style="padding: 0 0 0 0;">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 22px; line-height: 30px; color:#ff0000; margin: 0; letter-spacing: 3px;">
                            ¡PODRÁS GANAR GRANDES PREMIOS!
                        </p>
                        
                        </p>
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: bold; line-height: 30px; color:#020202; margin: 0; letter-spacing: 1px;">
                            iPhone SE / Auricular bluetooth Plantronics
                        </p>
                    </td>
                </tr>
            </tbody>
            </table>
        </td>
        <td width="78" bgcolor="#ffffff" valign="top" style="padding: 0 0;">
            <img src="https://html-email-builder.pages.dev/images/others/other-3.png"
            alt="files" style="display: block;"
            width="78" height="140"
            >
        </td>
    </tr>
</tbody>
</table>
</td>
</tr>




<!-------------------------Imagen-------------------------------->
<tr bgcolor="#e8eaea" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-6.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>














<!-------------------------Teams-------------------------------->
<tr bgcolor="#e8eaea" align="center">
<td style="padding: 0" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td style="padding: 10px 20px 10px 20px" align="center" valign="middle">
                <img
                    src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png"
                    alt="portada"
                    width="40" height="auto"
                    style="display: block;"
                >
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; line-height: 25px; letter-spacing: 3px;color:#020202; margin: 0;">
                    <span style="color: #5359a7; font-weight: bold; font-size: 20px; line-height: 35px; letter-spacing: 3px;text-decoration: none;">TEAMS</span>
                    <br>
                    LA EVOLUCIÓN DEL TRABAJO COLABORATIVO
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>


<!-------------------------Imagen-------------------------------->
<tr bgcolor="#e8eaea" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>






<!-- -----------------------Ruta online mail builder---------------------->
<!-- https://html-email-builder.pages.dev/images/others/other-5.png -->


<!-- -----------------------Ruta local ---------------------->
<!-- ./img/ -->


<!-- -----------------------Link con estilo ---------------------->
<!-- <a href="mailto:windows10upgrades@example.com">
    <span style="color: #ff0000; font-weight: bold; text-decoration: underline;">windows10upgrades@example.com</span>
</a> -->

<!-- -----------------------Nueva linea ---------------------->
<!-- <br> -->


<!-- -----------------------Texto en Negrita---------------------->
<!-- <b>Texto en negrita</b> -->


<!-- -----------------------Texto en Color---------------------->
<!-- <span style="color: #ff0000;">windows10upgrades@example.com</span> -->



<!-- -----------------------Espacio entre bloques---------------------->
<!-- <tr style="background-color: #ffffff"><td><p style="line-height: 40px;">&nbsp;</p></td></tr> -->

</table>
<!-- end email container -->


</td>
</tr>
</table>


</center>





</body>
</html>
`
},

{
    id: 57,
    name: '57. Welcome Email Creación Teams',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-57.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Phones</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            mso-line-height-rule: exactly;
        }
        
        * {
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 600px;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt0                  { background-color: #e8eaea; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }
    </style>


</head>

<body class="bg-color-general" style="margin: 0 auto; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
    <table width="600" class="container600" style="margin: 0 auto; max-width: 600px;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-general">
    <td width="600" style="text-align: center;">
    
    <!--email container-->
    <table width="600" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">

        <!-------------------------Header-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 4px 30px 0 30px;" align="center" valign="middle">
        <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td height="80" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="Mail Builder" width="auto" height="53" border="0">
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>

            
            
            
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#e8eaea" align="center">
    <td align="center" valign="middle">
        <img
            src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png"
            alt="portada"
            width="600" height="auto"
            style="display: block;"
        >
    </td>
</tr>

            
            
            
<!-------------------------Border-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 0;" align="center" valign="middle">
        <table
            style="border-bottom: 2px solid #ffffff;"
            width="600"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>
<!-------------------------Titular-------------------------------->
<tr bgcolor="#FF0000" align="center">
    <td style="padding: 15px 0px 2px 0px;" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td align="center" valign="middle">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 26px; line-height: 30px; color:#FFFFFF; margin: 0; letter-spacing: 4px;">
                            APROVECHA TODAS LAS
                            <br>
                            FUNCIONALIDADES DE TEAMS
                        </p>
                    </td>
                </tr>
            </tbody>
            </table>
    </td>
</tr>
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td align="center" valign="middle">
        <img
            src="https://html-email-builder.pages.dev/images/others/other-6.png"
            alt="portada"
            width="600" height="auto"
            style="display: block;"
        >
    </td>
</tr>

            
            
            
<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 35px 20px" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#020202; margin: 0;">
                        ¡Enhorabuena! Has creado tu equipo en <b>Microsoft Teams</b>.
                        <br>
                        Para continuar en tu evolución hacia el trabajo colaborativo aquí encontrarás información útil.
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>


<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td align="center" valign="middle">
        <img
            src="https://html-email-builder.pages.dev/images/others/divider-transparent.png"
            alt="portada"
            width="600" height="auto"
            style="display: block;"
        >
    </td>
</tr>

<!-------------------------Texto-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 35px 20px" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 20px; font-weight: bold; line-height: 22px; color:#020202; margin: 0;">
                        Todo lo que necesitas saber sobre Teams puedes consultarlo
                        <br>
                        en el espacio de Servicios TIC de Intranet.
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>


<!-------------------------Border-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 0;" align="center" valign="middle">
        <table
            style="border-bottom: 3px solid #ff0000;"
            width="30"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>

            
            
            
<!-------------------------Texto-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 20px 20px" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#020202; margin: 0;">
                        Allí podrás encontrar:
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>

            
            
            
<!-------------------------Triple Image, Triple Text WITH SPACES-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 0;" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr valign="top" align="center">
                <td width="197" bgcolor="#f1f4f4" valign="top" style="padding: 20px 15px;">
                    <img
                        src="https://html-email-builder.pages.dev/images/others/other-6.png"
                        alt="portada"
                        width="70" height="auto"
                        style="display: block;"
                    >
                    <p style="line-height: 12px;">&nbsp;</p>
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                        <b>Guías rápidas</b>
                        <br>
                        sobre cómo sacar todo
                        <br>
                        el partido a <b>Teams.</b>
                    </p>
                </td>
                <td width="4"></td>
                <td width="198" bgcolor="#f1f4f4" valign="top" style="padding: 20px 15px;">
                    <img
                        src="https://html-email-builder.pages.dev/images/others/other-5.png"
                        alt="portada"
                        width="70" height="auto"
                        style="display: block;"
                    >
                    <p style="line-height: 12px;">&nbsp;</p>
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                                Acceso
                                <br>
                                al <b>Curso de Teams</b>
                                <br>
                                en el Campus Virtual.
                    </p>
                </td>
                <td width="4"></td>
                <td width="197" bgcolor="#f1f4f4" valign="top" style="padding: 20px 15px;">
                    <img
                        src="https://html-email-builder.pages.dev/images/others/other-3.png"
                        alt="portada"
                        width="70" height="auto"
                        style="display: block;"
                    >
                    <p style="line-height: 12px;">&nbsp;</p>
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                                <b>Otros recursos de interés</b>
                                <br>
                                como infografía con tips
                                <br>
                                para el teletrabajo.
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>

            
            
            
<!-------------------------Empty Space-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 15px 30px;" align="center" valign="middle">
        <table
            width="100%"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>

            
            
            
<!-------------------------Primary Button with double background color -------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 0;" align="center" valign="middle">
        <table width="600" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
        <tbody>
            <tr>
                <td width="135" height="23" valign="top" style="border-top: 3px solid #f1f4f4; border-bottom: 3px solid #ffffff;">
                    <p style="line-height: 20px; background-color: #f1f4f4;">&nbsp;</p>
                    <p style="line-height: 20px; background-color: #ffffff;">&nbsp;</p>
                </td>
                <td width="340" height="46" bgcolor="#ff0000" align="center" style="color: #ffffff; border: 3px solid #ff0000; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; text-decoration: none; display: block;">
                    <a href="https://example.com"
                    style="line-height: 39px; color: #ffffff; background-color: #ff0000; font-size: 15px; font-weight: bold; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width:100%; display:inline-block; letter-spacing: 2px;">
                        ACCEDER AL ESPACIO DE TEAMS
                    </a>
                </td> 
                <td width="135" height="23" valign="top" style="border-top: 3px solid #f1f4f4; border-bottom: 3px solid #ffffff;">
                    <p style="line-height: 20px; background-color: #f1f4f4;">&nbsp;</p>
                    <p style="line-height: 20px; background-color: #ffffff;">&nbsp;</p>
                </td>
            </tr>
        </tbody>
        </table> 
    </td>
</tr>

            
            
            
<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 30px 20px" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#020202; margin: 0;">
                        Ya eres parte de la familia <b>Teams</b>,
                        <br>
                        ¿A qué esperas para invitar a otros a unirse a tu equipo?
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>

            
            
            <!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td align="center" valign="middle">
        <img
            src="https://html-email-builder.pages.dev/images/others/other-6.png"
            alt="portada"
            width="600" height="auto"
            style="display: block;"
        >
    </td>
</tr>


<!-------------------------Teams-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 0" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td style="padding: 10px 20px 10px 20px" align="center" valign="middle">
                    <img
                        src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png"
                        alt="portada"
                        width="40" height="auto"
                        style="display: block;"
                    >
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; line-height: 25px; letter-spacing: 3px;color:#020202; margin: 0;">
                        <span style="color: #5359a7; font-weight: bold; font-size: 20px; line-height: 35px; letter-spacing: 3px;text-decoration: none;">TEAMS</span>
                        <br>
                        LA EVOLUCIÓN DEL TRABAJO COLABORATIVO
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>


<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td align="center" valign="middle">
        <img
            src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png"
            alt="portada"
            width="600" height="auto"
            style="display: block;"
        >
        <!-- <img
            src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png"
            alt="portada"
            width="600" height="auto"
            style="display: block;"
        > -->
    </td>
</tr>

            
            
            
        
        
        
    <!-- -----------------------Ruta online mail builder---------------------->
    <!-- https://html-email-builder.pages.dev/images/others/other-5.png -->
    
    
    <!-- -----------------------Ruta local ---------------------->
    <!-- ./img/ -->
    
    
    <!-- -----------------------Link con estilo ---------------------->
    <!-- <a href="mailto:windows10upgrades@example.com">
        <span style="color: #ff0000; font-weight: bold; text-decoration: underline;">windows10upgrades@example.com</span>
    </a> -->
    
    <!-- -----------------------Nueva linea ---------------------->
    <!-- <br> -->
    
    
    <!-- -----------------------Texto en Negrita---------------------->
    <!-- <b>Texto en negrita</b> -->
    
    
    <!-- -----------------------Texto en Color---------------------->
    <!-- <span style="color: #ff0000;">windows10upgrades@example.com</span> -->
    
    
    
    <!-- -----------------------Espacio entre bloques---------------------->
    <!-- <tr style="background-color: #ffffff"><td><p style="line-height: 40px;">&nbsp;</p></td></tr> -->
    
    </table>
    <!-- end email container -->
    
    
    </td>
    </tr>
    </table>
    
    
    </center>
    
    
    
    
    
    </body>
    </html>
`
},

{
    id: 58,
    name: '58. Email Convocatoria',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-58.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Phones</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            mso-line-height-rule: exactly;
        }
        
        * {
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 600px;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt0                  { background-color: #e8eaea; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }
    </style>


</head>

<body class="bg-color-general" style="margin: 0 auto; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
    <table width="600" class="container600" style="margin: 0 auto; max-width: 600px;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-general">
    <td width="600" style="text-align: center;">
    
    <!--email container-->
    <table width="600" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">
    
    
    
<!-------------------------Header-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 4px 30px 10px 30px;" align="center" valign="middle">
    <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td height="80" align="left" valign="middle">
                    <a href="https://example.com" target="_blank">
                        <img src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="Mail Builder" width="auto" height="53" border="0">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>


        
        
        
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Titular-------------------------------->
<!-------------------------Titular-------------------------------->
<tr bgcolor="#E20714" align="center">
<td style="padding: 15px 0px 15px 0px;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 24px; line-height: 30px; color:#FFFFFF; margin: 0; letter-spacing: 4px;">
                        ADOPCIÓN DEL PROCESO
                        <br>
                        DE GESTIÓN DE LA DEMANDA 2.0
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
</td>
</tr>

        
        
        
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding-top: 30px" align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-5.png"
        alt="portada"
        width="65" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Texto-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 15px 20px 30px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#595757; margin: 0;">
                    Queremos invitaros a participar en el proyecto
                    <br>
                    de <b>"Adopción del proceso de Gestión de la Demanda"</b>
                    <br>
                    cuyo kick-off tendrá lugar el próximo:
<br><br>
<span style="font-weight: bold; font-size: 20px;">MARTES 24 DE NOVIEMBRE, A LAS 16.30</span>
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>

        
        
        
<!-- -----------------------Footer - Español e Ingles------------------------------ -->
<!-------------------------Border-------------------------------->
<tr bgcolor="#" align="center">
<td style="padding: 0;" align="center" valign="middle">
    <table
        style="border-top: 4px solid #E20714;"
        width="100%"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr>
        
        
        
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding-top: 30px" align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-4.png"
        alt="portada"
        width="75" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 15px 20px 10px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#595757; margin: 0;">
                    En esta reunión estaremos revisando los objetivos del nuevo proceso
                    <br>
                    y los principales cambios, además del alcance
<br>
y el enfoque del proyecto.
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>

        
        
        
<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 20px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
<td width="100" align="right" bgcolor="#ffffff" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-3.png"
        alt="portada"
        width="20" height="auto"
        style="display: block;"
    >
</td>
            <td align="center" valign="middle" style="padding: 0 5px">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 18px; font-weight: bold; line-height: 22px; color:#595757; margin: 0;">
                    Otros puntos importantes a revisar serán:
                </p>
            </td>
<td width="100" align="left" bgcolor="#ffffff" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-4.png"
        alt="portada"
        width="20" height="auto"
        style="display: block;"
    >
</td>
        </tr>
    </tbody>
    </table>
</td>
</tr>
<!-------------------------Cuadruple Image, Cuadruple Text WITH SPACES-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding-top: 4px;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr valign="top" align="center">
            <td width="147" bgcolor="#ffffff" valign="top" style="padding: 20px 10px;">
                <img
                src="https://html-email-builder.pages.dev/images/others/other-2.png"
                alt="portada"
                width="20" height="auto"
                style="display: block;"
                >
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: bold; color:#020202; line-height: 22px;">
Calendario
                </p>
            </td>
            <td width="4"></td>
            <td width="147" bgcolor="#ffffff" valign="top" style="padding: 20px 10px;">
                <img
                src="https://html-email-builder.pages.dev/images/others/other-2.png"
                alt="portada"
                width="20" height="auto"
                style="display: block;"
                >
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: bold; color:#020202; line-height: 22px;">
Entregables
                </p>
            </td>
            <td width="4"></td>
            <td width="147" bgcolor="#ffffff" valign="top" style="padding: 20px 10px;">
                <img
                src="https://html-email-builder.pages.dev/images/others/other-2.png"
                alt="portada"
                width="20" height="auto"
                style="display: block;"
                >
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: bold; color:#020202; line-height: 22px;">
Riesgos
                </p>
            </td>

        </tr>
    </tbody>
    </table>
</td>
</tr>



<!-------------------------Cuadruple Image, Cuadruple Text WITH SPACES-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding-top: 4px; padding-bottom: 20px;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr valign="top" align="center">
            <td width="147" bgcolor="#ffffff" valign="top" style="padding: 20px 10px;">
                <img
                src="https://html-email-builder.pages.dev/images/others/other-2.png"
                alt="portada"
                width="20" height="auto"
                style="display: block;"
                >
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: bold; color:#020202; line-height: 22px;">
                    Organización y seguimiento
                </p>
            </td>
            <td width="4"></td>
            <td width="147" bgcolor="#ffffff" valign="top" style="padding: 20px 10px;">
                <img
                src="https://html-email-builder.pages.dev/images/others/other-2.png"
                alt="portada"
                width="20" height="auto"
                style="display: block;"
                >
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: bold; color:#020202; line-height: 22px;">
Actividades de adopción
                </p>
            </td>
            <td width="4"></td>
            <td width="147" bgcolor="#ffffff" valign="top" style="padding: 20px 10px;">
                <img
                src="https://html-email-builder.pages.dev/images/others/other-2.png"
                alt="portada"
                width="20" height="auto"
                style="display: block;"
                >
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: bold; color:#020202; line-height: 22px;">
                    Indicadores de adopción
                </p>
            </td>

        </tr>
    </tbody>
    </table>
</td>
</tr>





<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-6.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>





<!-------------------------Primary Button-------------------------------->
<!--  Define width, height and bgcolor in TD attributes. 
TD height and color should be equal to A line-height and color.
Border radius probably won't work but it won't hurt either. -->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 40px;" align="center" valign="middle">
    <table style="-webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
    <tbody>
        <tr> 
            <td width="350" height="45" bgcolor="#ff0000" align="center" style="color: #ffffff; border: 3px solid #ff0000; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; text-decoration: none; display: block;">
                <a href=""
                style="line-height: 39px; color: #ffffff; background-color: #ff0000; font-size: 16px; font-weight: bold; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width:100%; display:inline-block">
                    ACCEDER A LA REUNIÓN EN TEAMS
                </a>
            </td> 
        </tr>
    </tbody>
    </table> 
</td>
</tr>
        
        
        
<!-------------------------Teams-------------------------------->
<!-- <tr bgcolor="#f1f4f4" align="center">
<td style="padding: 20px 20px 0 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle" style="padding-top: 20px">
        <img
            src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png"
            alt="portada"
            width="60" height="auto"
            style="display: block;"
        >
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr> -->
<!-------------------------Texto-------------------------------->
<!-- <tr bgcolor="#f1f4f4" align="center">
<td style="padding: 15px 20px 0 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 19px; line-height: 18px; letter-spacing: 2px;color:#020202; margin: 0;">
                    <span style="color: #595757; font-weight: bold; font-size: 18px; letter-spacing: 3px;text-decoration: none;">REUNIÓN EN MICROSOFT TEAMS</span></a>
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr> -->
<!-------------------------Texto-------------------------------->
<!-- <tr bgcolor="#f1f4f4" align="center">
<td style="padding: 5px 20px 35px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 15px; font-weight: normal; line-height: 15px; color:#595757; margin: 0;">
                    Únete en el ordenador o a través de una aplicación móvil
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr> -->



<!-- -----------------------Footer - Español e Ingles------------------------------ -->
<!-------------------------Footer-------------------------------->
<tr bgcolor="#000000" align="center">
<td style="padding: 0 30px 4px 30px;" align="center" valign="middle">
    <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td height="80" align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 20px; line-height: 30px; color:#FFFFFF; margin: 0; letter-spacing: 2px;">
                        Estrategia de Gobierno y Demanda
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>

        
        
        
    
    
    
<!-- -----------------------Ruta online mail builder---------------------->
<!-- https://html-email-builder.pages.dev/images/others/other-5.png -->


<!-- -----------------------Ruta local ---------------------->
<!-- ./img/ -->


<!-- -----------------------Link con estilo ---------------------->
<!-- <a href="mailto:windows10upgrades@example.com">
    <span style="color: #ff0000; font-weight: bold; text-decoration: underline;">windows10upgrades@example.com</span>
</a> -->

<!-- -----------------------Nueva linea ---------------------->
<!-- <br> -->


<!-- -----------------------Texto en Negrita---------------------->
<!-- <b>Texto en negrita</b> -->


<!-- -----------------------Texto en Color---------------------->
<!-- <span style="color: #ff0000;">windows10upgrades@example.com</span> -->



<!-- -----------------------Espacio entre bloques---------------------->
<!-- <tr style="background-color: #ffffff"><td><p style="line-height: 40px;">&nbsp;</p></td></tr> -->

</table>
<!-- end email container -->


</td>
</tr>
</table>


</center>





</body>
</html>
`
},

{
    id: 60,
    name: '60. Webinar Colaboradores',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-60.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Phones</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            mso-line-height-rule: exactly;
        }
        
        * {
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 600px;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt0                  { background-color: #e8eaea; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }
    </style>


</head>

<body class="bg-color-general" style="margin: 0 auto; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
    <table width="600" class="container600" style="margin: 0 auto; max-width: 600px;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-general">
    <td width="600" style="text-align: center;">
    
    <!--email container-->
    <table width="600" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">
    
    
    <!-------------------------Header-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 4px 30px 0 30px;" align="center" valign="middle">
    <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td height="80" align="left" valign="middle">
                    <a href="https://example.com" target="_blank">
                        <img src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="Mail Builder" width="auto" height="53" border="0">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>

        
        
        
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#e8eaea" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Border-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 0;" align="center" valign="middle">
    <table
        style="border-bottom: 2px solid #ffffff;"
        width="600"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr>
<!-------------------------Titular-------------------------------->
<tr bgcolor="#FF0000" align="center">
<td style="padding: 15px 0px 15px 0px;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 26px; line-height: 30px; color:#FFFFFF; margin: 0; letter-spacing: 4px;">
                        PARTICIPA EN EL WEBINAR
                        <br>
                        PARA COLABORADORES DE TEAMS
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
</td>
</tr>
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-4.png"
        alt="portada"
        width="26" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 35px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#020202; margin: 0;">
                    <b>Como parte de la campaña "Teams: la evolución del trabajo colaborativo"</b>, queremos que seas miembro del equipo que lidera el cambio en la manera en que trabajamos. Por eso te invitamos a participar del webinar formativo para colaboradores.
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>


<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 15px 0;" align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-3.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>





<!-------------------------Triple Image, Triple Text WITH SPACES-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 4px 0;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr valign="top" align="center">
            <td width="197" bgcolor="#ffffff" valign="top" style="padding: 15px 15px;">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: bold; color:#020202; line-height: 18px;">
                    <span style="color: red">DÍA</span>
                    <br>
                    3 de diciembre
                </p>
            </td>
            <td width="4"></td>
            <td width="198" bgcolor="#ffffff" valign="top" style="padding: 15px 15px;">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: bold; color:#020202; line-height: 18px;">
                    <span style="color: red">HORA</span>
                    <br>
                    15 horas CET
                </p>
            </td>
            <td width="4"></td>
            <td width="197" bgcolor="#ffffff" valign="top" style="padding: 15px 15px;">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: bold; color:#020202; line-height: 18px;">
                    <span style="color: red">DÓNDE</span>
                    <br>
                    Live events de Teams
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>


<tr bgcolor="#ffffff" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-6.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>


<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 20px 20px 0 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 20px; font-weight: bold; line-height: 22px; color:#020202; margin: 0; letter-spacing: 2px;">
                    ¿QUÉ VERÁS EN EL WEBINAR?
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>



<!-------------------------Triple Image, Triple Text WITH SPACES-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 0;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr valign="top" align="center">
            <td width="197" bgcolor="#ffffff" valign="top" style="padding: 20px 0px;">
                <img
                    src="https://html-email-builder.pages.dev/images/others/other-4.png"
                    alt="portada"
                    width="70" height="auto"
                    style="display: block;"
                >
                <p style="line-height: 12px;">&nbsp;</p>
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 15px; font-weight: normal; color:#020202; line-height: 22px;">
                    Conocerás
                    <br>
                    las funcionalidades
                    <br>
                    más interesantes de Teams
                </p>
            </td>
            <td width="4"></td>
            <td width="198" bgcolor="#ffffff" valign="top" style="padding: 20px 0px;">
                <img
                    src="https://html-email-builder.pages.dev/images/others/other-5.png"
                    alt="portada"
                    width="70" height="auto"
                    style="display: block;"
                >
                <p style="line-height: 12px;">&nbsp;</p>
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 15px; font-weight: normal; color:#020202; line-height: 22px;">
                    Descubrirás buenas prácticas
                    <br>
                    para aumentar la colaboración
                    <br>
                    gracias a Teams
                </p>
            </td>
            <td width="4"></td>
            <td width="197" bgcolor="#ffffff" valign="top" style="padding: 20px 0px;">
                <img
                    src="https://html-email-builder.pages.dev/images/others/other-6.png"
                    alt="portada"
                    width="70" height="auto"
                    style="display: block;"
                >
                <p style="line-height: 12px;">&nbsp;</p>
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 15px; font-weight: normal; color:#020202; line-height: 22px;">
                    Te contaremos cuál será tu
                    <br>
                    rol como motor del cambio y
                    <br>
                    cómo participar activamente
                    <br>
                    en la campaña
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>


<!-------------------------Empty Space-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 3px 30px;" align="center" valign="middle">
    <table
        width="100%"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr>

<!-------------------------Empty Space-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 6px 30px;" align="center" valign="middle">
    <table
        width="100%"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr>



<!-------------------------Teams-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 0" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td style="padding: 10px 20px 20px 20px" align="center" valign="middle">
                <img
                    src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png"
                    alt="portada"
                    width="40" height="auto"
                    style="display: block;"
                >
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; line-height: 25px; letter-spacing: 3px;color:#020202; margin: 0;">
                    <span style="color: #5359a7; font-weight: bold; font-size: 20px; line-height: 35px; letter-spacing: 3px;text-decoration: none;">TEAMS</span>
                    <br>
                    LA EVOLUCIÓN DEL TRABAJO COLABORATIVO
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>


<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
    <!-- <img
        src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    > -->
</td>
</tr>

        
        
        
    
    
    
<!-- -----------------------Ruta online mail builder---------------------->
<!-- https://html-email-builder.pages.dev/images/others/other-5.png -->


<!-- -----------------------Ruta local ---------------------->
<!-- ./img/ -->


<!-- -----------------------Link con estilo ---------------------->
<!-- <a href="mailto:windows10upgrades@example.com">
    <span style="color: #ff0000; font-weight: bold; text-decoration: underline;">windows10upgrades@example.com</span>
</a> -->

<!-- -----------------------Nueva linea ---------------------->
<!-- <br> -->


<!-- -----------------------Texto en Negrita---------------------->
<!-- <b>Texto en negrita</b> -->


<!-- -----------------------Texto en Color---------------------->
<!-- <span style="color: #ff0000;">windows10upgrades@example.com</span> -->



<!-- -----------------------Espacio entre bloques---------------------->
<!-- <tr style="background-color: #ffffff"><td><p style="line-height: 40px;">&nbsp;</p></td></tr> -->

</table>
<!-- end email container -->


</td>
</tr>
</table>


</center>





</body>
</html>
`
},

{
    id: 63,
    name: '63. Plantillas Email GdD Formación 2',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-63.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Phones</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            mso-line-height-rule: exactly;
        }
        
        * {
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 600px;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt0                  { background-color: #e8eaea; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }
    </style>


</head>

<body class="bg-color-general" style="margin: 0 auto; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
    <table width="600" class="container600" style="margin: 0 auto; max-width: 600px;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-general">
    <td width="600" style="text-align: center;">
    
    <!--email container-->
    <table width="600" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">
    
    
    
<!-------------------------Header-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 4px 30px 10px 30px;" align="center" valign="middle">
    <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td height="80" align="left" valign="middle">
                    <a href="https://example.com" target="_blank">
                        <img src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="Mail Builder" width="auto" height="53" border="0">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>


        
        
        
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/headers/header-generic-1.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Titular-------------------------------->
<tr bgcolor="#FF0000" align="center">
<td style="padding: 15px 0px 20px 0px;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 24px; font-weight: normal;line-height: 30px; color:#FFFFFF; margin: 0; letter-spacing: 4px;">
                        ADOPCIÓN DEL PROCESO
                        <br>
                        DE GESTIÓN DE LA DEMANDA 2.0
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
</td>
</tr>
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-4.png"
        alt="portada"
        width="30" height="auto"
        style="display: block;"
    >
</td>
</tr>




<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td align="center" valign="middle" style="padding-top: 25px">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-6.png"
        alt="portada"
        width="68" height="auto"
        style="display: block;"
    >
</td>
</tr>

<!-------------------------Texto-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 15px 20px 30px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#020202; margin: 0;">
                    Queremos invitarlos a participar en el proyecto
                    <br>
                    de <b>"Adopción del proceso de Gestión de la Demanda",</b>
                    <br>
                    cuyo kick-off tendrá lugar el próximo:
                    <br>
                    <br>
                    <span style="font-size: 18px; font-weight: bold;">MARTES 24 DE NOVIEMBRE, A LAS 16.30</span>
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>



<!-------------------------Border-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 0;" align="center" valign="middle">
    <table
        style="border-bottom: 7px solid #ff0000;"
        width="600"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr>
        
        
        
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding-top: 25px" align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-3.png"
        alt="portada"
        width="76" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 25px 20px 0 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#020202; margin: 0;">
                    En esta reunión estaremos revisando los objetivos del nuevo proceso
                    <br>
                    y los principales cambios, además del alcance
                    <br>
                    y el enfoque del proyecto.
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>


<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding-top: 25px" align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-5.png"
        alt="portada"
        width="275" height="auto"
        style="display: block;"
    >
</td>
</tr>

<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 5px 20px 0 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 40px; color:#020202; margin: 0;">
                    ACTIVIDADES
                </p>
                <img
                    src="https://html-email-builder.pages.dev/images/others/other-6.png"
                    alt="portada"
                    width="306" height="1"
                    style="display: block;"
                >
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 40px; color:#020202; margin: 0;">
                    ENTREGABLES
                </p>
                <img
                    src="https://html-email-builder.pages.dev/images/others/other-6.png"
                    alt="portada"
                    width="306" height="1"
                    style="display: block;"
                >
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 40px; color:#020202; margin: 0;">
                    INDICADORES
                </p>
                <img
                    src="https://html-email-builder.pages.dev/images/others/other-6.png"
                    alt="portada"
                    width="306" height="1"
                    style="display: block;"
                >
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 40px; color:#020202; margin: 0;">
                    ORGANIZACIÓN Y SEGUIMIENTO
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>


<tr style="background-color: #ffffff"><td><p style="line-height: 10px;">&nbsp;</p></td></tr>

<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-3.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>



<!-------------------------Primary Button-------------------------------->
<!--  Define width, height and bgcolor in TD attributes. 
TD height and color should be equal to A line-height and color.
Border radius probably won't work but it won't hurt either. -->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 20px;" align="center" valign="middle">
    <table style="-webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
    <tbody>
        <tr> 
            <td width="330" height="45" bgcolor="#ff0000" align="center" style="color: #ffffff; border: 3px solid #ff0000; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; text-decoration: none; display: block;">
                <a href=""
                style="line-height: 39px; color: #ffffff; background-color: #ff0000; font-size: 15px; font-weight: bold; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width:100%; display:inline-block; letter-spacing: 1px;">
                    ACCEDER A LA REUNIÓN EN TEAMS
                </a>
            </td> 
        </tr>
    </tbody>
    </table> 
</td>
</tr>

<tr style="background-color: #f1f4f4;"><td><p style="line-height: 20px;">&nbsp;</p></td></tr>


<!-- -----------------------Footer - Español e Ingles------------------------------ -->
<!-------------------------Footer-------------------------------->
<tr bgcolor="#000000" align="center">
<td style="padding: 0 30px 4px 30px;" align="center" valign="middle">
    <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td height="80" align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 20px; line-height: 30px; color:#FFFFFF; margin: 0; letter-spacing: 2px;">
                        Estrategia de Gobierno y Demanda
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>
<!-- -----------------------Ruta online mail builder---------------------->
<!-- https://html-email-builder.pages.dev/images/others/other-5.png -->


<!-- -----------------------Ruta local ---------------------->
<!-- ./img/ -->


<!-- -----------------------Link con estilo ---------------------->
<!-- <a href="mailto:windows10upgrades@example.com">
    <span style="color: #ff0000; font-weight: bold; text-decoration: underline;">windows10upgrades@example.com</span>
</a> -->

<!-- -----------------------Nueva linea ---------------------->
<!-- <br> -->


<!-- -----------------------Texto en Negrita---------------------->
<!-- <b>Texto en negrita</b> -->


<!-- -----------------------Texto en Color---------------------->
<!-- <span style="color: #ff0000;">windows10upgrades@example.com</span> -->



<!-- -----------------------Espacio entre bloques---------------------->
<!-- <tr style="background-color: #ffffff"><td><p style="line-height: 40px;">&nbsp;</p></td></tr> -->

</table>
<!-- end email container -->


</td>
</tr>
</table>


</center>





</body>
</html>
`
},

{
    id: 64,
    name: '64. Plantillas Email GdD FAQ',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-64.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Phones</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            mso-line-height-rule: exactly;
        }
        
        * {
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 600px;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt0                  { background-color: #e8eaea; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }
    </style>


</head>

<body class="bg-color-general" style="margin: 0 auto; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
    <table width="600" class="container600" style="margin: 0 auto; max-width: 600px;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-general">
    <td width="600" style="text-align: center;">
    
    <!--email container-->
    <table width="600" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">
    
    
    
<!-------------------------Header-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 4px 30px 10px 30px;" align="center" valign="middle">
    <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td height="80" align="left" valign="middle">
                    <a href="https://example.com" target="_blank">
                        <img src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="Mail Builder" width="auto" height="53" border="0">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>


        
        
        
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/headers/header-generic-1.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Titular-------------------------------->
<tr bgcolor="#FF0000" align="center">
<td style="padding: 15px 0px 15px 0px;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 24px; font-weight: normal;line-height: 30px; color:#FFFFFF; margin: 0; letter-spacing: 4px;">
                        ADOPCIÓN DEL PROCESO
                        <br>
                        DE GESTIÓN DE LA DEMANDA 2.0
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
</td>
</tr>
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-4.png"
        alt="portada"
        width="30" height="auto"
        style="display: block;"
    >
</td>
</tr>



<!-------------------------Texto-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 25px 20px 10px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#595757; margin: 0;">
                    Queremos invitarlos a participar en el proyecto
                    <br>
                    de <span style="font-weight: bold; color: #595757">"Adopción del proceso de Gestión de la Demanda",</span>
                    <br>
                    cuyo kick-off tendrá lugar el próximo:
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>




<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-1.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 10px 20px 0 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 19px; font-weight: normal; line-height: 22px; color:#595757; margin: 0; font-weight: bold;letter-spacing: 2px;">
                    PREGUNTAS FRECUENTES
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>


<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="left">
<td style="padding: 25px 20px 20px 20px" align="left" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="left" valign="middle">

                <!-- ------------------PREGUNTA--------------------- -->
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 17px; font-weight: bold; line-height: 22px; color:#595757; margin: 0; text-align: left;">
                    <span style="color: #ff0000;">
                        1.
                    </span>
                    ¿Adopción del proceso de Gestión de la Demanda?
                </p>
                <p style="line-height: 10px;">&nbsp;</p>
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#595757; margin: 0; text-align: left;">
                    Queremos invitarlos a participar en el proyecto de <span style="font-weight: bold; color: #595757">"Adopción del proceso de Gestión de la Demanda",</span> cuyo kick-off tendrá lugar el próximo...
                </p>
                <p style="line-height: 30px;">&nbsp;</p>



                <!-- ------------------PREGUNTA--------------------- -->
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 17px; font-weight: bold; line-height: 22px; color:#595757; margin: 0; text-align: left;">
                    <span style="color: #ff0000;">
                        2.
                    </span>
                    ¿Adopción del proceso de Gestión de la Demanda?
                </p>
                <p style="line-height: 10px;">&nbsp;</p>
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#595757; margin: 0; text-align: left;">
                    Queremos invitarlos a participar en el proyecto de <span style="font-weight: bold; color: #595757">"Adopción del proceso de Gestión de la Demanda",</span> cuyo kick-off tendrá lugar el próximo...
                </p>
                <p style="line-height: 30px;">&nbsp;</p>



                <!-- ------------------PREGUNTA--------------------- -->
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 17px; font-weight: bold; line-height: 22px; color:#595757; margin: 0; text-align: left;">
                    <span style="color: #ff0000;">
                        3.
                    </span>
                    ¿Adopción del proceso de Gestión de la Demanda?
                </p>
                <p style="line-height: 10px;">&nbsp;</p>
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#595757; margin: 0; text-align: left;">
                    Queremos invitarlos a participar en el proyecto de <span style="font-weight: bold; color: #595757">"Adopción del proceso de Gestión de la Demanda",</span> cuyo kick-off tendrá lugar el próximo...
                </p>
                <p style="line-height: 30px;">&nbsp;</p>



                <!-- ------------------PREGUNTA--------------------- -->
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 17px; font-weight: bold; line-height: 22px; color:#595757; margin: 0; text-align: left;">
                    <span style="color: #ff0000;">
                        4.
                    </span>
                    ¿Adopción del proceso de Gestión de la Demanda?
                </p>
                <p style="line-height: 10px;">&nbsp;</p>
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#595757; margin: 0; text-align: left;">
                    Queremos invitarlos a participar en el proyecto de <span style="font-weight: bold; color: #595757">"Adopción del proceso de Gestión de la Demanda",</span> cuyo kick-off tendrá lugar el próximo...
                </p>
                <p style="line-height: 30px;">&nbsp;</p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>


<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-3.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>















<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-1.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 10px 20px 0 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 19px; font-weight: normal; line-height: 22px; color:#595757; margin: 0; font-weight: bold;letter-spacing: 2px;">
                    NOVEDADES
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>


<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="left">
<td style="padding: 25px 20px 20px 20px" align="left" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="left" valign="middle">

                <!-- ------------------PREGUNTA--------------------- -->
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 17px; font-weight: bold; line-height: 22px; color:#595757; margin: 0; text-align: left;">
                    <span style="color: #ff0000;">
                        1.
                    </span>
                    ¿Adopción del proceso de Gestión de la Demanda?
                </p>
                <p style="line-height: 10px;">&nbsp;</p>
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#595757; margin: 0; text-align: left;">
                    Queremos invitarlos a participar en el proyecto de <span style="font-weight: bold; color: #595757">"Adopción del proceso de Gestión de la Demanda",</span> cuyo kick-off tendrá lugar el próximo...
                </p>
                <p style="line-height: 30px;">&nbsp;</p>



                <!-- ------------------PREGUNTA--------------------- -->
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 17px; font-weight: bold; line-height: 22px; color:#595757; margin: 0; text-align: left;">
                    <span style="color: #ff0000;">
                        2.
                    </span>
                    ¿Adopción del proceso de Gestión de la Demanda?
                </p>
                <p style="line-height: 10px;">&nbsp;</p>
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#595757; margin: 0; text-align: left;">
                    Queremos invitarlos a participar en el proyecto de <span style="font-weight: bold; color: #595757">"Adopción del proceso de Gestión de la Demanda",</span> cuyo kick-off tendrá lugar el próximo...
                </p>
                <p style="line-height: 30px;">&nbsp;</p>



                <!-- ------------------PREGUNTA--------------------- -->
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 17px; font-weight: bold; line-height: 22px; color:#595757; margin: 0; text-align: left;">
                    <span style="color: #ff0000;">
                        3.
                    </span>
                    ¿Adopción del proceso de Gestión de la Demanda?
                </p>
                <p style="line-height: 10px;">&nbsp;</p>
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#595757; margin: 0; text-align: left;">
                    Queremos invitarlos a participar en el proyecto de <span style="font-weight: bold; color: #595757">"Adopción del proceso de Gestión de la Demanda",</span> cuyo kick-off tendrá lugar el próximo...
                </p>
                <p style="line-height: 30px;">&nbsp;</p>



                <!-- ------------------PREGUNTA--------------------- -->
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 17px; font-weight: bold; line-height: 22px; color:#595757; margin: 0; text-align: left;">
                    <span style="color: #ff0000;">
                        4.
                    </span>
                    ¿Adopción del proceso de Gestión de la Demanda?
                </p>
                <p style="line-height: 10px;">&nbsp;</p>
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#595757; margin: 0; text-align: left;">
                    Queremos invitarlos a participar en el proyecto de <span style="font-weight: bold; color: #595757">"Adopción del proceso de Gestión de la Demanda",</span> cuyo kick-off tendrá lugar el próximo...
                </p>
                <p style="line-height: 30px;">&nbsp;</p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>


<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-3.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>














<!-------------------------Primary Button-------------------------------->
<!--  Define width, height and bgcolor in TD attributes. 
TD height and color should be equal to A line-height and color.
Border radius probably won't work but it won't hurt either. -->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 30px; padding-bottom: 50px;" align="center" valign="middle">
    <table style="-webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
    <tbody>
        <tr> 
            <td width="330" height="45" bgcolor="#ff0000" align="center" style="color: #ffffff; border: 3px solid #ff0000; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; text-decoration: none; display: block;">
                <a href=""
                style="line-height: 39px; color: #ffffff; background-color: #ff0000; font-size: 15px; font-weight: bold; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width:100%; display:inline-block; letter-spacing: 1px;">
                    ACCEDER A LA REUNIÓN EN TEAMS
                </a>
            </td> 
        </tr>
    </tbody>
    </table> 
</td>
</tr>




<!-- -----------------------Footer - Español e Ingles------------------------------ -->
<!-------------------------Footer-------------------------------->
<tr bgcolor="#000000" align="center">
<td style="padding: 0 30px 4px 30px;" align="center" valign="middle">
    <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td height="80" align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 20px; line-height: 30px; color:#FFFFFF; margin: 0; letter-spacing: 2px;">
                        Estrategia de Gobierno y Demanda
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>
<!-- -----------------------Ruta online mail builder---------------------->
<!-- https://html-email-builder.pages.dev/images/others/other-5.png -->


<!-- -----------------------Ruta local ---------------------->
<!-- ./img/ -->


<!-- -----------------------Link con estilo ---------------------->
<!-- <a href="mailto:windows10upgrades@example.com">
    <span style="color: #ff0000; font-weight: bold; text-decoration: underline;">windows10upgrades@example.com</span>
</a> -->

<!-- -----------------------Nueva linea ---------------------->
<!-- <br> -->


<!-- -----------------------Texto en Negrita---------------------->
<!-- <b>Texto en negrita</b> -->


<!-- -----------------------Texto en Color---------------------->
<!-- <span style="color: #ff0000;">windows10upgrades@example.com</span> -->



<!-- -----------------------Espacio entre bloques---------------------->
<!-- <tr style="background-color: #ffffff"><td><p style="line-height: 40px;">&nbsp;</p></td></tr> -->

</table>
<!-- end email container -->


</td>
</tr>
</table>


</center>





</body>
</html>
`
},

{
    id: 66,
    name: '66. Plantilla Anuncio',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-66.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Phones</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            mso-line-height-rule: exactly;
        }
        
        * {
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 600px;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt0                  { background-color: #e8eaea; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }
    </style>


</head>

<body class="bg-color-general" style="margin: 0 auto; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
    <table width="600" class="container600" style="margin: 0 auto; max-width: 600px;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-general">
    <td width="600" style="text-align: center;">
    
    <!--email container-->
    <table width="600" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">
    
    
    
<!-------------------------Header-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 4px 30px 10px 30px;" align="center" valign="middle">
    <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td height="80" align="left" valign="middle">
                    <a href="https://example.com" target="_blank">
                        <img src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="Mail Builder" width="auto" height="53" border="0">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>


        
        
        
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Titular-------------------------------->
<tr bgcolor="#ff0000" align="center">
<td style="padding: 20px 0px 0px 0px;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 26px; font-weight: normal;line-height: 30px; color:#ffffff; margin: 0; letter-spacing: 2px;">
                        MÁS AGILIDAD
                        <br>
                        EN LA GESTIÓN DE TUS PROYECTOS
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
</td>
</tr>
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-6.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>

<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="middle">
<td style="padding: 25px 20px 25px 20px" align="middle" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="middle" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#595757; margin: 0;">
                    En los próximos días entrará en vigor la fase 1 del <span style="font-weight: bold; color: #595757;">nuevo proceso de Gestión de la Demanda TIC</span>, del que ya recibiste sesiones de formación durante los últimos meses.
                    <br>
                    <br>
                    Desde la Oficina de Gestión de Proyectos (PMO) hemos trabajado en cambios sobre el proceso para <span style="font-weight: bold; color: #595757;">hacerlo más ágil</span>. Con estas mejoras tenemos como objetivo:
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>


<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="left">
<td style="padding: 5px 30px 5px 30px" align="left" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td width="80">&nbsp;</td>
            <td width="480"align="left" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 26px; color:#595757; margin: 0;">
                    <span style="font-size: 10px; color: #ff0000;">&#x2B24;&nbsp;</span> Incrementar el nivel de calidad de las demandas
                    <br>
                    <span style="font-size: 10px; color: #ff0000;">&#x2B24;&nbsp;</span> Delimitar de responsabilidades de los Grupos clave
                    <br>
                    <span style="font-size: 10px; color: #ff0000;">&#x2B24;&nbsp;</span> Mejorar la priorización de las demandas
                    <br>
                    <span style="font-size: 10px; color: #ff0000;">&#x2B24;&nbsp;</span> Hacer más eficiente el flujo de las casuísticas más importantes
                </p>
            </td>
            <td width="40">&nbsp;</td>
        </tr>
    </tbody>
    </table>
</td>
</tr>

<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="middle">
<td style="padding: 25px 30px 25px 30px" align="middle" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="middle" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: bold; line-height: 22px; color:#595757; margin: 0;">
                    Para más información, puedes consultar los siguientes enlaces:
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>

<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="left">
<td style="padding: 5px 30px 5px 30px" align="left" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td width="80">&nbsp;</td>
            <td width="480"align="left" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 26px; color:#595757; margin: 0;">
                    <span style="font-size: 10px; color: #000000;">&#x2B24;&nbsp;</span> <a href="https://example.com">
                        <span style="color: #000000; text-decoration: underline;">Guía rápida de usuario</span> </a>
                    <br>

                    <span style="font-size: 10px; color: #000000;">&#x2B24;&nbsp;</span> <a href="https://example.com">
                        <span style="color: #000000; text-decoration: underline;">Vídeo de la sesión de comunicación del proceso de GdD 2.0</span> </a>
                    <br>

                    <span style="font-size: 10px; color: #000000;">&#x2B24;&nbsp;</span> <a href="">
                        <span style="color: #000000; text-decoration: underline;">Vídeo de una sesión de formación</span> </a>
                    <br>

                    <span style="font-size: 10px; color: #000000;">&#x2B24;&nbsp;</span> <a href="https://example.com">
                        <span style="color: #000000; text-decoration: underline;">Otros documentos</span> </a>
                </p>
            </td>
            <td width="40">&nbsp;</td>
        </tr>
    </tbody>
    </table>
</td>
</tr>


<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="middle">
<td style="padding: 25px 30px 25px 30px" align="middle" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="middle" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#595757; margin: 0;">
                    Queremos que nuestros usuarios puedan acceder a los gestores de demanda de una manera ágil y rápida. Si tienes alguna duda puedes contactar con el equipo a través del buzón <a href="mailto:pmo@example.com">
                        <span style="color: #ff0000; font-weight: bold;">pmo@example.com</span>.
                    </a>
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>

<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding-top: 10px" align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-6.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>



<tr style="background-color: #f1f4f4;"><td><p style="line-height: 20px;">&nbsp;</p></td></tr>

<!-- -----------------------Footer - Español e Ingles------------------------------ -->
<!-------------------------Footer-------------------------------->
<tr bgcolor="#000000" align="center">
<td style="padding: 0 30px 4px 30px;" align="center" valign="middle">
    <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td height="80" align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 20px; line-height: 30px; color:#FFFFFF; margin: 0; letter-spacing: 2px;">
                        Estrategia de Gobierno y Demanda
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>


<!-- -----------------------Ruta online mail builder---------------------->
<!-- https://html-email-builder.pages.dev/images/others/other-5.png -->


<!-- -----------------------Ruta local ---------------------->
<!-- ./img/ -->


<!-- -----------------------Link con estilo ---------------------->
<!-- <a href="mailto:windows10upgrades@example.com">
    <span style="color: #ff0000; font-weight: bold; text-decoration: underline;">windows10upgrades@example.com</span>
</a> -->

<!-- -----------------------Nueva linea ---------------------->
<!-- <br> -->


<!-- -----------------------Texto en Negrita---------------------->
<!-- <b>Texto en negrita</b> -->


<!-- -----------------------Texto en Color---------------------->
<!-- <span style="color: #ff0000;">windows10upgrades@example.com</span> -->



<!-- -----------------------Espacio entre bloques---------------------->
<!-- <tr style="background-color: #ffffff"><td><p style="line-height: 40px;">&nbsp;</p></td></tr> -->

</table>
<!-- end email container -->


</td>
</tr>
</table>


</center>





</body>
</html>
`
},

{
    id: 69,
    name: '69. Info Eficiencia',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-69.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Phones</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            mso-line-height-rule: exactly;
        }
        
        * {
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 600px;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt0                  { background-color: #e8eaea; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }
    </style>


</head>

<body class="bg-color-general" style="margin: 0 auto; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
    <table width="600" class="container600" style="margin: 0 auto; max-width: 600px;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-general">
    <td width="600" style="text-align: center;">
    
    <!--email container-->
    <table width="600" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">
    
    
    
<!-------------------------Header-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 4px 30px 0 30px;" align="center" valign="middle">
    <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td height="80" align="left" valign="middle">
                    <a href="https://example.com" target="_blank">
                        <img src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="Mail Builder" width="auto" height="53" border="0">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>

        
        
        
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>
<!-------------------------Border-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 0;" align="center" valign="middle">
    <table
        style="border-bottom: 4px solid #ffffff;"
        width="600"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr>

        
        
        
<!-------------------------Titular Rojo-------------------------------->
<tr bgcolor="#ff0000" align="center">
<td style="padding: 30px 0px 10px 0px;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 26px; font-weight: normal;line-height: 30px; color:#ffffff; margin: 0; letter-spacing: 2px;">
                        MENOS EMAILS, MÁS EFICIENCIA
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
</td>
</tr>
<!-------------------------Linea Roja-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-6.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 25px 20px 35px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#020202; margin: 0;">
                    En ocasiones, el exceso de correos electrónicos genera ruido y distracción
                    <br>
en la comunicación. Con <b>Teams</b> encontraréis la forma de aumentar la eficiencia
<br>
en la comunicación mientras estáis trabajando en equipo.
<br>
<br>
Os invitamos a utilizar <b>Teams</b> para ciertas comunicaciones y Outlook
<br>
para otras, logrando así que el intercambio de información con tu
<br>
equipo sea más fluido y ordenado.
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>

        
        
        
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-3.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 30px 20px 50px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#020202; margin: 0;">
                    Descubre cómo hacerlo en esta infografía. Además, te adelantamos
                    <br>
algunas funcionalidades que podrás aprovechar:
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>

        
        
        
<!-------------------------Empty Space-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 20px 30px;" align="center" valign="middle">
    <table
        width="100%"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr>

        
        
        
<!-------------------------Triple Image, Triple Text WITH SPACES-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 0;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr valign="top" align="center">
            <td width="197" bgcolor="#f1f4f4" valign="top" style="padding: 0px 15px;">
                <img
                    src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
                    alt="portada"
                    width="70" height="auto"
                    style="display: block;"
                >
                <p style="line-height: 12px;">&nbsp;</p>
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                    Chats para
<br>
conversaciones rápidas
<br>
e instantáneas
                </p>
            </td>
            <td width="4" bgcolor="#ffffff"></td>
            <td width="198" bgcolor="#f1f4f4" valign="top" style="padding: 0px 15px;">
                <img
                    src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
                    alt="portada"
                    width="70" height="auto"
                    style="display: block;"
                >
                <p style="line-height: 12px;">&nbsp;</p>
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                            Toda la información relevante del equipo en un mismo lugar accesible para todos
                </p>
            </td>
            <td width="4" bgcolor="#ffffff"></td>
            <td width="197" bgcolor="#f1f4f4" valign="top" style="padding: 0px 15px;">
                <img
                    src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
                    alt="portada"
                    width="70" height="auto"
                    style="display: block;"
                >
                <p style="line-height: 12px;">&nbsp;</p>
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                            Compartir y editar
<br>
archivos de forma
<br>
sencilla
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>

<!-------------------------Empty Space-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 15px 30px;" align="center" valign="middle">
    <table
        width="100%"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr>
        
        
<!-------------------------Primary Button-------------------------------->
<!--  Define width, height and bgcolor in TD attributes. 
TD height and color should be equal to A line-height and color.
Border radius probably won't work but it won't hurt either. -->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 40px 0 40px 0;" align="center" valign="middle">
    <table style="-webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
    <tbody>
        <tr> 
            <td width="220" height="45" bgcolor="#ff0000" align="center" style="color: #ffffff; border: 3px solid #ff0000; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; text-decoration: none; display: block;">
                <a href=""
                style="line-height: 39px; color: #ffffff; background-color: #ff0000; font-size: 15px; font-weight: normal; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width:100%; display:inline-block; letter-spacing: 2px;">
                    VER INFOGRAFÍA
                </a>
            </td> 
        </tr>
    </tbody>
    </table> 
</td>
</tr>


<!-------------------------Empty Space-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 10px 30px;" align="center" valign="middle">
    <table
        width="100%"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr>


        
        <!-------------------------Teams English-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 0" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td style="padding: 10px 20px 10px 20px" align="center" valign="middle">
                <img
                    src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png"
                    alt="portada"
                    width="40" height="auto"
                    style="display: block;"
                >
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; line-height: 25px; letter-spacing: 3px;color:#020202; margin: 0;">
                    <span style="color: #5359a7; font-weight: bold; font-size: 20px; line-height: 35px; letter-spacing: 3px;text-decoration: none;">TEAMS</span>
                    <br>
                    LA EVOLUCIÓN DEL TRABAJO COLABORATIVO
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>
        
        
        
<!-------------------------Empty Space-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 20px 30px;" align="center" valign="middle">
    <table
        width="100%"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr>

        
        
        <!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>
        
        
        
    
    
    
<!-- -----------------------Ruta online mail builder---------------------->
<!-- https://html-email-builder.pages.dev/images/others/other-5.png -->


<!-- -----------------------Ruta local ---------------------->
<!-- ./img/ -->


<!-- -----------------------Link con estilo ---------------------->
<!-- <a href="mailto:windows10upgrades@example.com">
    <span style="color: #ff0000; font-weight: bold; text-decoration: underline;">windows10upgrades@example.com</span>
</a> -->

<!-- -----------------------Nueva linea ---------------------->
<!-- <br> -->


<!-- -----------------------Texto en Negrita---------------------->
<!-- <b>Texto en negrita</b> -->


<!-- -----------------------Texto en Color---------------------->
<!-- <span style="color: #ff0000;">windows10upgrades@example.com</span> -->



<!-- -----------------------Espacio entre bloques---------------------->
<!-- <tr style="background-color: #ffffff"><td><p style="line-height: 40px;">&nbsp;</p></td></tr> -->

</table>
<!-- end email container -->


</td>
</tr>
</table>


</center>





</body>
</html>
`
},

{
    id: 70,
    name: '70. Anuncio Quiz',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-70.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Phones</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            mso-line-height-rule: exactly;
        }
        
        * {
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 600px;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt0                   { background-color: #e8eaea; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }
    </style>


</head>

<body class="bg-color-general" style="margin: 0 auto; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
    <table width="600" class="container600" style="margin: 0 auto; max-width: 600px;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-general">
    <td width="600" style="text-align: center;">
    
    <!--email container-->
    <table width="600" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">
    
    
    
<!-------------------------Header-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 4px 30px 0 30px;" align="center" valign="middle">
    <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td height="80" align="left" valign="middle">
                    <a href="https://example.com" target="_blank">
                        <img src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="Mail Builder" width="auto" height="53" border="0">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>

        
        
        
<!-------------------------header-------------------------------->

<tr bgcolor="#f1f4f4" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/headers/header-generic-1.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Border-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 0;" align="center" valign="middle">
    <table
        style="border-bottom: 3px solid #ffffff;"
        width="600"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr>
<!-------------------------Titular-------------------------------->
<tr bgcolor="#ff0000" align="center">
<td style="padding: 15px 0px 15px 0px;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 26px; line-height: 30px; color:#FFFFFF; margin: 0; letter-spacing: 3px;">
                        ¿CUÁNTO HAS APRENDIDO SOBRE TEAMS?
                        ¡ES HORA DE PONERTE A PRUEBA!
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
</td>
</tr>
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-4.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 35px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#020202; margin: 0;">
                    Desde la Oficina de Adopción TIC queremos premiar vuestro esfuerzo y dedicación
                    <br>
                    al integrar Teams en tu día a día para hacer más eficiente el trabajo colaborativo.
                    <br>
                    Por eso, te invitamos a participar del primer <b>Quiz sobre Teams</b>. 
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>



<!-------------------------Texto-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 35px 20px 5px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 22px; line-height: 16px; color:#020202; margin: 0;">
                    ESTO ES LO QUE TIENES QUE SABER ANTES DE COMENZAR:
                    <br>
                </p>
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; line-height: 22px; color:#020202; margin: 0;">
                    <br>
                    Son dos Quizzes en contexto de la campaña <b>“Teams: la evolución del trabajo colaborativo”</b>. Este es el primero y el segundo será más adelante.
                    <br>
                    <br>
                    Al responder las preguntas de los dos Quizzes, sumas puntos
                    <br>
                    y participas para ganar estos estupendos premios: 
                    <br>
                    <br>
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>




<tr bgcolor="#ffffff" align="center">
<td style="padding: 0;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
        <tr valign="top" align="center">
            <td width="456" valign="top" style="padding: 3px 0 0 0;">
                <img
                    src="https://html-email-builder.pages.dev/images/others/other-6.png"
                    alt="Imagen de premios"
                    width="600" height="auto"
                    style="display: block;"
                    >
            </td>
        </tr>
        </tbody>
    </table>
</td>
</tr>



<!-------------------------Border-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 0;" align="center" valign="middle">
    <table
        style="border-bottom: 5px solid #ffffff;"
        width="600"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr>



<!-------------------------Triple Image, Triple Text WITHOUT SPACES and PADDING-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 30px 0 0 0;" align="center" valign="middle">
<table role="presentation" cellspacing="0" cellpadding="0" border="0">
<tbody>
    <tr valign="top" align="center">
        <td width="93" bgcolor="#f1f4f4" valign="top" style="padding: 0 0;">
            <img src="https://html-email-builder.pages.dev/images/others/other-5.png"
            alt="files" style="display: block;"
            width="93" height="auto"
            >
        </td>
        <td width="414" bgcolor="#f1f4f4" valign="top" style="padding: 0;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr valign="top" align="center">
                    <td width="414" bgcolor="#f1f4f4" valign="top" style="padding: 3px 0 0 0;">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 22px; line-height: 30px; color:#ff0000; margin: 0; letter-spacing: 3px;">
                            SUENA BIEN, ¿NO?
                        </p>
                        <!-- <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; line-height: 16px; color:#ff0000; margin: 0; letter-spacing: 3px;">
                            <br>
                            &nbsp;
                        </p> -->
                        </p>
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#020202; margin: 0; letter-spacing: 1px;">
                            <br>
                            Este es el primer Quiz, pero estate atento, que próximamente lanzaremos el segundo.
                        </p>
                    </td>
                </tr>
            </tbody>
            </table>

            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr valign="top" align="center">
                    <td width="414" bgcolor="#f1f4f4" valign="top" style="padding: 10px 0 20px 0;">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 18px; font-weight: bold; line-height: 30px; color:#020202; margin: 0; letter-spacing: 1px;">
                            ¿Estás listo para participar?
                        </p>
                    </td>
                </tr>
            </tbody>
            </table>

            <table style="-webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
                <tbody>
                    <tr>
                        <td width="200" height="45" bgcolor="#ff0000" align="center" style="color: #ffffff; border: 3px solid #ff0000; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; text-decoration: none; display: block;">
                            <a href="https://example.com"
                            style="line-height: 39px; color: #ffffff; background-color: #ff0000; font-size: 14px; font-weight: normal; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width: 100%; letter-spacing: 2px; display: inline-block">
                                ACCEDE AL QUIZ
                            </a>
                        </td> 
                    </tr>
                </tbody>
            </table>
        </td>
        <td width="93" bgcolor="#f1f4f4" valign="top" style="padding: 0 0 0 0;">
            <img src="https://html-email-builder.pages.dev/images/others/other-1.png"
            alt="files" style="display: block;"
            width="93" height="238"
            >
        </td>
    </tr>
</tbody>
</table>
</td>
</tr>




<!-------------------------Empty Space-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 5px 30px 5px 30px;" align="center" valign="middle">
    <table
        width="100%"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr>





<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-6.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>


<!-------------------------Teams-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 0" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td style="padding: 10px 20px 10px 20px" align="center" valign="middle">
                <img
                    src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
                    alt="portada"
                    width="40" height="auto"
                    style="display: block;"
                >
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; line-height: 25px; letter-spacing: 3px;color:#020202; margin: 0;">
                    <span style="color: #5359a7; font-weight: bold; font-size: 20px; line-height: 35px; letter-spacing: 3px;text-decoration: none;">TEAMS</span>
                    <br>
                    LA EVOLUCIÓN DEL TRABAJO COLABORATIVO
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>


<!-------------------------Empty Space-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 25px 30px 5px 30px;" align="center" valign="middle">
    <table
        width="100%"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr>


<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>




<!-- -----------------------Ruta online mail builder---------------------->
<!-- https://html-email-builder.pages.dev/images/others/other-5.png -->


<!-- -----------------------Ruta local ---------------------->
<!-- ./img/ -->


<!-- -----------------------Link con estilo ---------------------->
<!-- <a href="mailto:windows10upgrades@example.com">
    <span style="color: #ff0000; font-weight: bold; text-decoration: underline;">windows10upgrades@example.com</span>
</a> -->

<!-- -----------------------Nueva linea ---------------------->
<!-- <br> -->


<!-- -----------------------Texto en Negrita---------------------->
<!-- <b>Texto en negrita</b> -->


<!-- -----------------------Texto en Color---------------------->
<!-- <span style="color: #ff0000;">windows10upgrades@example.com</span> -->



<!-- -----------------------Espacio entre bloques---------------------->
<!-- <tr style="background-color: #ffffff"><td><p style="line-height: 40px;">&nbsp;</p></td></tr> -->

</table>
<!-- end email container -->


</td>
</tr>
</table>


</center>





</body>
</html>
`
},

{
    id: 74,
    name: '74. Encuesta TIC',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-74.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Phones</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            mso-line-height-rule: exactly;
        }
        
        * {
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 600px;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt0                  { background-color: #e8eaea; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }
    </style>


</head>

<body class="bg-color-general" style="margin: 0 auto; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
    <table width="600" class="container600" style="margin: 0 auto; max-width: 600px;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-general">
    <td width="600" style="text-align: center;">
    
    <!--email container-->
    <table width="600" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">
    
    
    
<!-------------------------Header-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 4px 30px 10px 30px;" align="center" valign="middle">
    <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td height="80" align="left" valign="middle">
                    <a href="https://example.com" target="_blank">
                        <img src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="Mail Builder" width="auto" height="53" border="0">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>


        
        
        
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/headers/header-generic-1.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>

<!-------------------------Border-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 0;" align="center" valign="middle">
    <table
        style="border-bottom: 3px solid #ffffff;"
        width="600"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr>

<!-------------------------Titular-------------------------------->
<tr bgcolor="#E20714" align="center">
<td style="padding: 15px 0px 18px 0px;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 24px; font-weight: bold;line-height: 30px; color:#FFFFFF; margin: 0;">
                        SERVICIOS TIC
                        <br>
                        TU VALORACIÓN NOS AYUDA A SEGUIR MEJORANDO                            
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
</td>
</tr>
<!-------------------------Imagen-------------------------------->
<!-- <tr bgcolor="#ffffff" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-4.png"
        alt="portada"
        width="26" height="auto"
        style="display: block;"
    >
</td>
</tr> -->



<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 35px 20px 30px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color: #595757; margin: 0;">
                    Desde el área TIC <span style="color: #595757; font-weight: bold;">estamos comprometidos</span> con desarrollar
                    <br>
                    soluciones y ofrecer servicios tecnológicos que estén a la altura
                    <br>
                    de tus necesidades y las de tu negocio.  
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>
        
        
        
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/divider-transparent.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>


<tr style="background-color: #f1f4f4"><td><p style="line-height: 15px;">&nbsp;</p></td></tr>

<!-------------------------Imagen-------------------------------->
<tr bgcolor="#F1F4F4" align="center">
<td style="padding-top: 15px" align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-4.png"
        alt="portada"
        width="116" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Texto-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 25px 20px 30px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color: #595757; margin: 0;">
                    <span style="font-size: 21px; font-weight: bold; color: #020202;">¿Qué opinas sobre los servicios TIC?</span>
                    <br>
                    <br>
                    Conocer tu grado de satisfacción respecto de los servicios del área TIC
                    <br>
                    nos aporta información valiosa para contribuir a la <span style="color: #595757; font-weight: bold;">mejora constante
                    <br>
                    del entorno de trabajo digital, los servicios de atención y soporte, y las aplicaciones de negocio.</span> 
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>



<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/divider-transparent.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>

<tr style="background-color: #ffffff"><td><p style="line-height: 35px;">&nbsp;</p></td></tr>

<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-5.png"
        alt="portada"
        width="78" height="auto"
        style="display: block;"
    >
</td>
</tr>



<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 25px 20px 00px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#020202; margin: 0;">
                    <span style="font-size: 20px; font-weight: bold;">¿NOS DEDICARÍAS UNOS MINUTOS PARA RESPONDER
                    <br>    
                    ESTA BREVE ENCUESTA?</span>
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>


<!-------------------------Primary Button-------------------------------->
<!--  Define width, height and bgcolor in TD attributes. 
TD height and color should be equal to A line-height and color.
Border radius probably won't work but it won't hurt either. -->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 30px;" align="center" valign="middle">
    <table style="-webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
    <tbody>
        <tr> 
            <td width="250" height="45" bgcolor="#ff0000" align="center" style="color: #ffffff; border: 3px solid #ff0000; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; text-decoration: none; display: block;">
                <a href="https://example.com"
                style="line-height: 39px; color: #ffffff; background-color: #ff0000; font-size: 15px; font-weight: normal; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width:100%; display:inline-block;">
                    ACCEDE A LA ENCUESTA
            </td> 
        </tr>
    </tbody>
    </table> 
</td>
</tr>



<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 0px 20px 40px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 14px; font-weight: normal; line-height: 22px; color:#595757; margin: 0;">
                    <span style="font-size: 20px; font-weight: bold; color: #595757;">¡Muchas gracias por tu colaboración!</span>
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>




<!-------------------------Texto-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 30px 10px 30px 10px;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 13px; font-weight: normal; line-height: 18px; color:#595757; margin: 0;">
                    Por favor, no compartas este email.
                    <br>
                    Si tienes problemas de acceso, puedes hacer clic <a href="https://example.com">
                        <span style="color: #595757; font-weight: bold; text-decoration: underline;">aquí</span>
                    </a>
                    <br>
                    <br>
                    Te garantizamos el anonimato y confidencialidad de tus respuestas.
                    <br>
                    La encuesta y toda la información la gestiona y almacena Survey Partner, que nos facilita informes agregados.
                    <br>
                    Los criterios para reportar información son muy estrictos, evitando identificiar personas con respuestas.
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>



<!-------------------------Footer Version 3 - Español-------------------------------->
<tr class="bg-color-footer" align="center">
<td style="padding: 0 30px;" align="center" valign="middle">
    <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td height="80" align="left" valign="middle">
                    <a href="https://example.com" target="_blank">
                        <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="auto" border="0">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>


<!-- -----------------------Ruta online mail builder---------------------->
<!-- https://html-email-builder.pages.dev/images/others/other-5.png -->


<!-- -----------------------Ruta local ---------------------->
<!-- ./img/ -->


<!-- -----------------------Link con estilo ---------------------->
<!-- <a href="mailto:windows10upgrades@example.com">
    <span style="color: #ff0000; font-weight: bold; text-decoration: underline;">windows10upgrades@example.com</span>
</a> -->

<!-- -----------------------Nueva linea ---------------------->
<!-- <br> -->


<!-- -----------------------Texto en Negrita---------------------->
<!-- <b>Texto en negrita</b> -->


<!-- -----------------------Texto en Color---------------------->
<!-- <span style="color: #ff0000;">windows10upgrades@example.com</span> -->



<!-- -----------------------Espacio entre bloques---------------------->
<!-- <tr style="background-color: #ffffff"><td><p style="line-height: 40px;">&nbsp;</p></td></tr> -->

</table>
<!-- end email container -->


</td>
</tr>
</table>


</center>





</body>
</html>
`
},

{
    id: 75,
    name: '75. Video Autonomía',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-75.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Phones</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            mso-line-height-rule: exactly;
        }
        
        * {
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 600px;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt0                   { background-color: #e8eaea; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }
    </style>


</head>

<body class="bg-color-general" style="margin: 0 auto; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
    <table width="600" class="container600" style="margin: 0 auto; max-width: 600px;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-general">
    <td width="600" style="text-align: center;">
    
    <!--email container-->
    <table width="600" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">
    
    
    
<!-------------------------Header-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 4px 30px 0 30px;" align="center" valign="middle">
    <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td height="80" align="left" valign="middle">
                    <a href="https://example.com" target="_blank">
                        <img src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="Mail Builder" width="auto" height="53" border="0">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>

        
        
        
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#e8eaea" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Border-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 0;" align="center" valign="middle">
    <table
        style="border-bottom: 4px solid #ffffff;"
        width="600"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr>
<!-------------------------Titular-------------------------------->
<tr bgcolor="#ff0000" align="center">
<td style="padding: 25px 0px 25px 0px;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 26px; line-height: 30px; color:#FFFFFF; margin: 0;">
                        CON TEAMS, TU EQUIPO GANA EN AUTONOMÍA
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
</td>
</tr>
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-4.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 35px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#020202; margin: 0;">
                    <span style="font-weight: bold; font-size: 17px;">Autonomía es poder colaborar con tu equipo sin depender de otros
                    <br>
                    para hacerlo.</span>
                    <br>
                    <br>
                    A través de Teams, tienes libre acceso y gestión de los archivos
                    <br>
                    involucrados con el trabajo que estés realizando junto a tu equipo.
                    <br>
                    <br>
                    <span style="font-weight: bold; font-size: 17px;">¿Cuál es la propuesta de Teams para lograr esa autonomía?</span>
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>





<!-------------------------Cuadruple Image, Cuadruple Text WITHOUT SPACES and PADDING-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 0 0 0 0;" align="center" valign="middle">
<table role="presentation" cellspacing="0" cellpadding="0" border="0">
<tbody>
    <tr valign="top" align="center">
        <td width="150" bgcolor="#ffffff" valign="top" style="padding: 20px 10px 20px 10px;">
            <img
                src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
                alt="portada"
                width="auto" height="45"
                style="display: block;"
            >
            <p style="line-height: 12px;">&nbsp;</p>
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 15px; font-weight: normal; color:#020202; line-height: 17px;">
                Crea, edita y
                <br>
                comparte todos los
                <br>
                archivos en un
                <br>
                mismo lugar
            </p>
        </td>
        <td width="150" bgcolor="#ffffff" valign="top" style="padding: 20px 10px 20px 10px;">
            <img
                src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
                alt="portada"
                width="auto" height="45"
                style="display: block;"
            >
            <p style="line-height: 12px;">&nbsp;</p>
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 15px; font-weight: normal; color:#020202; line-height: 17px;">
                Organiza
                <br>
                los archivos a través
                <br>
                de canales
            </p>
        </td>
        <td width="150" bgcolor="#ffffff" valign="top" style="padding: 20px 10px 20px 10px;">
            <img
                src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
                alt="portada"
                width="auto" height="45"
                style="display: block;"
            >
            <p style="line-height: 12px;">&nbsp;</p>
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 15px; font-weight: normal; color:#020202; line-height: 17px;">
                Encuentra
                <br>
                fácilmente los
                <br>
                contenidos
            </p>
        </td>
        <td width="150" bgcolor="#ffffff" valign="top" style="padding: 20px 10px 20px 10px;">
            <img
                src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
                alt="portada"
                width="auto" height="45"
                style="display: block;"
            >
            <p style="line-height: 12px;">&nbsp;</p>
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 15px; font-weight: normal; color:#020202; line-height: 17px;">
                Accede
                <br>
                rápidamente desde
                <br>
                cualquier dispositivo
                <br>
                y lugar
            </p>
        </td>
    </tr>
</tbody>
</table>
</td>
</tr>


<!-------------------------Empty Space-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 15px 30px 15px 30px;" align="center" valign="middle">
    <table
        width="100%"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr>


<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-3.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>


<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 35px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 19px; font-weight: normal; line-height: 22px; color:#020202; margin: 0;">
                    <span style="font-weight: bold;">Te invitamos a aprender en este vídeo cómo gestionar y
                    <br>
                    organizar los contenidos en Teams:</span>
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>




<tr bgcolor="#e8eaea" align="center">
<td style="padding: 20px 20px 35px 20px;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
        <tr valign="top" align="center">
            <td width="456" valign="top" style="padding: 3px 0 0 0;">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 24px; line-height: 16px; color:#020202; margin: 0; letter-spacing: 3px;">
                    &nbsp;
                </p>
                <a href="" target="_blank">
                    <img
                    src="https://html-email-builder.pages.dev/images/others/other-1.png"
                    alt="portada"
                    width="540" height="auto"
                    style="display: block;"
                >
                </a>
            </td>
        </tr>
        </tbody>
    </table>
</td>
</tr>






<!-- <tr bgcolor="#ffffff" align="center">
<td style="padding-bottom: 30px;" align="center" valign="middle">
    <table style="-webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
    <tbody>
        <tr> 
            <td width="320" height="45" bgcolor="#ff0000" align="center" style="color: #ffffff; border: 3px solid #ff0000; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; text-decoration: none; display: block;">
                <a href=""
                style="line-height: 39px; color: #ffffff; background-color: #ff0000; font-size: 15px; font-weight: normal; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width: 100%; letter-spacing: 2px; display: inline-block">
                    SOLICITA TU EQUIPO EN TEAMS
                </a>
            </td> 
        </tr>
    </tbody>
    </table> 
</td>
</tr> -->



<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-6.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>


<!-------------------------Teams-------------------------------->
<!-- <tr bgcolor="#e8eaea" align="center"> -->
<tr bgcolor="#ffffff" align="center">
<td style="padding-bottom: 20px;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td style="padding: 10px 20px 10px 20px" align="center" valign="middle">
                <img
                    src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png"
                    alt="portada"
                    width="40" height="auto"
                    style="display: block;"
                >
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; line-height: 25px; letter-spacing: 3px;color:#020202; margin: 0;">
                    <span style="color: #5359a7; font-weight: bold; font-size: 20px; line-height: 35px; letter-spacing: 3px;text-decoration: none;">TEAMS</span>
                    <br>
                    LA EVOLUCIÓN DEL TRABAJO COLABORATIVO
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>


<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
    <!-- <img
        src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    > -->
</td>
</tr>

        
        
        
<!-- -----------------------Footer - Español e Ingles------------------------------ -->
<!-------------------------Footer-------------------------------->
<!-- <tr bgcolor="#000000" align="center">
<td style="padding: 0 30px 4px 30px;" align="center" valign="middle">
    <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td height="60" align="left" valign="middle">
                    <a href="https://example.com" target="_blank">
                        <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="40" border="0">
                        <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="40" border="0">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr> -->

        
        
        
    
    
    
<!-- -----------------------Ruta online mail builder---------------------->
<!-- https://html-email-builder.pages.dev/images/others/other-5.png -->


<!-- -----------------------Ruta local ---------------------->
<!-- ./img/ -->


<!-- -----------------------Link con estilo ---------------------->
<!-- <a href="mailto:windows10upgrades@example.com">
    <span style="color: #ff0000; font-weight: bold; text-decoration: underline;">windows10upgrades@example.com</span>
</a> -->

<!-- -----------------------Nueva linea ---------------------->
<!-- <br> -->


<!-- -----------------------Texto en Negrita---------------------->
<!-- <b>Texto en negrita</b> -->


<!-- -----------------------Texto en Color---------------------->
<!-- <span style="color: #ff0000;">windows10upgrades@example.com</span> -->



<!-- -----------------------Espacio entre bloques---------------------->
<!-- <tr style="background-color: #ffffff"><td><p style="line-height: 40px;">&nbsp;</p></td></tr> -->

</table>
<!-- end email container -->


</td>
</tr>
</table>


</center>





</body>
</html>
`
},

{
    id: 76,
    name: '76. Infografía Autonomía',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-76.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Phones</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            mso-line-height-rule: exactly;
        }
        
        * {
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 600px;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt0                   { background-color: #e8eaea; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }
    </style>


</head>

<body class="bg-color-general" style="margin: 0 auto; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
    <table width="600" class="container600" style="margin: 0 auto; max-width: 600px;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-general">
    <td width="600" style="text-align: center;">
    
    <!--email container-->
    <table width="600" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">
    
    
    
<!-------------------------Header-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 4px 30px 0 30px;" align="center" valign="middle">
    <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td height="80" align="left" valign="middle">
                    <a href="https://example.com" target="_blank">
                        <img src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="Mail Builder" width="auto" height="53" border="0">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>

        
        
        
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#e8eaea" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/headers/header-generic-1.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Border-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 0;" align="center" valign="middle">
    <table
        style="border-bottom: 4px solid #ffffff;"
        width="600"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr>
<!-------------------------Titular-------------------------------->
<tr bgcolor="#ff0000" align="center">
<td style="padding: 25px 0px 25px 0px;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 26px; line-height: 30px; color:#FFFFFF; margin: 0; letter-spacing: 3px;">
                        CON <span style="color: #ffffff; font-weight: bold;">PLANNER</span>, TU EQUIPO
                        <br>
                        TAMBIÉN GANA EN AUTONOMÍA
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
</td>
</tr>
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center"><td align="center" valign="middle"><img src="https://html-email-builder.pages.dev/images/others/other-4.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"></td></tr>

        
        
        
<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 35px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#595757; margin: 0;">
                    <span style="color: #595757; font-weight: bold; font-size: 17px;">Planner</span> es la solución digital integrada a Teams para organizar y gestionar
                    <br>
                    las tareas y los proyectos de una manera intuitiva, visual y colaborativa.
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>


<!-------------------------Empty Space-------------------------------->
<!-- <tr bgcolor="#ffffff" align="center">
<td style="padding: 15px 30px 15px 30px;" align="center" valign="middle">
    <table
        width="100%"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr> -->


<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/divider-transparent.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>


<!-------------------------Texto-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 35px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#595757; margin: 0;">
                    La autonomía en el trabajo colaborativo aporta agilidad y eficiencia en la ejecución
                    <br>
                    de tareas. <span style="color: #595757; font-weight: bold; font-size: 17px;">Planner</span> facilita a tu equipo tener mayor autonomía en el desarrollo
                    <br>
                    y rendimiento de los planes de trabajo a través de estas ventajas.
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>




<!-------------------------Triple Image, Triple Text WITH SPACES-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 0;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr valign="middle" align="center">
            <td width="294" bgcolor="#ffffff" valign="middle" style="padding: 20px 0px;">
                <img
                    src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
                    alt="portada"
                    width="70" height="auto"
                    style="display: block;"
                >
                <p style="line-height: 12px;">&nbsp;</p>
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 15px; font-weight: normal; color:#595757; line-height: 22px;">
                    Organizar las tareas
                    <br>
                    visualmente
                </p>
            </td>
            <td width="12" bgcolor="#ffffff">
                <img
                    src="https://html-email-builder.pages.dev/images/others/divider-transparent.png"
                    alt="portada"
                    width="11" height="auto"
                    style="display: block;"
                >
            </td>
            <td width="294" bgcolor="#ffffff" valign="middle" style="padding: 20px 0px;">
                <img
                    src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
                    alt="portada"
                    width="70" height="auto"
                    style="display: block;"
                >
                <p style="line-height: 12px;">&nbsp;</p>
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 15px; font-weight: normal; color:#595757; line-height: 22px;">
                    Conocer el flujo de trabajo
                    <br>
                    de todo el equipo
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>


<!-------------------------Empty Space-------------------------------->
<!-- <tr bgcolor="#f1f4f4" align="center">
<td style="padding: 2px 30px;" align="center" valign="middle">
    <table
        width="100%"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr> -->


<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/divider-transparent.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>

<!-------------------------Triple Image, Triple Text WITH SPACES-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 0;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr valign="middle" align="center">
            <td width="294" bgcolor="#ffffff" valign="middle" style="padding: 20px 0px;">
                <img
                    src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
                    alt="portada"
                    width="70" height="auto"
                    style="display: block;"
                >
                <p style="line-height: 12px;">&nbsp;</p>
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 15px; font-weight: normal; color:#595757; line-height: 22px;">
                    Monitorizar el progreso del plan
                    <br>
                    de trabajo
                </p>
            </td>
            <td width="12" bgcolor="#ffffff">
                <img
                    src="https://html-email-builder.pages.dev/images/others/divider-transparent.png"
                    alt="portada"
                    width="11" height="auto"
                    style="display: block;"
                >
            </td>
            <td width="294" bgcolor="#ffffff" valign="middle" style="padding: 20px 0px;">
                <img
                    src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
                    alt="portada"
                    width="70" height="auto"
                    style="display: block;"
                >
                <p style="line-height: 12px;">&nbsp;</p>
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 15px; font-weight: normal; color:#595757; line-height: 22px;">
                    Establecer prioridades
                    <br>
                    y deadlines
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>




<!-------------------------Texto-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 35px 20px 25px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 20px; font-weight: normal; line-height: 22px; color:#020202; margin: 0;">
                    <span style="font-weight: bold;">¿CÓMO UTILIZAR PLANNER?</span>
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>


<!-------------------------Primary Button-------------------------------->
<!--  Define width, height and bgcolor in TD attributes. 
TD height and color should be equal to A line-height and color.
Border radius probably won't work but it won't hurt either. -->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 0px 0px 30px 0;" align="center" valign="middle">
    <table style="-webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
    <tbody>
        <tr> 
            <td width="230" height="45" bgcolor="#ff0000" align="center" style="color: #ffffff; border: 3px solid #ff0000; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; text-decoration: none; display: block;">
                <a href=""
                style="line-height: 39px; color: #ffffff; background-color: #ff0000; font-size: 13px; font-weight: bold; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width: 100%; display: inline-block; letter-spacing: 1px;">
                    ACCEDE A LA INFOGRAFÍA
                </a>
            </td> 
        </tr>
    </tbody>
    </table> 
</td>
</tr>



<!-------------------------Border-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 0;" align="center" valign="middle">
    <table
        style="border-bottom: 4px solid #ffffff;"
        width="600"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr>



<!-------------------------Imagen-------------------------------->
<!-- <tr bgcolor="#ffffff" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-6.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr> -->


<!-------------------------Teams-------------------------------->
<!-- <tr bgcolor="#e8eaea" align="center"> -->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding-top: 20px; padding-bottom: 20px;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td style="padding: 10px 20px 10px 20px" align="center" valign="middle">
                <img
                    src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png"
                    alt="portada"
                    width="40" height="auto"
                    style="display: block;"
                >
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; line-height: 25px; letter-spacing: 3px;color:#020202; margin: 0;">
                    <span style="color: #5359a7; font-weight: bold; font-size: 20px; line-height: 35px; letter-spacing: 3px;text-decoration: none;">TEAMS</span>
                    <br>
                    LA EVOLUCIÓN DEL TRABAJO COLABORATIVO
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>


<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
    <!-- <img
        src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    > -->
</td>
</tr>

        
        
        
<!-- -----------------------Footer - Español e Ingles------------------------------ -->
<!-------------------------Footer-------------------------------->
<!-- <tr bgcolor="#000000" align="center">
<td style="padding: 0 30px 4px 30px;" align="center" valign="middle">
    <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td height="60" align="left" valign="middle">
                    <a href="https://example.com" target="_blank">
                        <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="40" border="0">
                        <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="40" border="0">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr> -->

        
        
        
    
    
    
<!-- -----------------------Ruta online mail builder---------------------->
<!-- https://html-email-builder.pages.dev/images/others/other-5.png -->


<!-- -----------------------Ruta local ---------------------->
<!-- ./img/ -->


<!-- -----------------------Link con estilo ---------------------->
<!-- <a href="mailto:windows10upgrades@example.com">
    <span style="color: #ff0000; font-weight: bold; text-decoration: underline;">windows10upgrades@example.com</span>
</a> -->

<!-- -----------------------Nueva linea ---------------------->
<!-- <br> -->


<!-- -----------------------Texto en Negrita---------------------->
<!-- <b>Texto en negrita</b> -->


<!-- -----------------------Texto en Color---------------------->
<!-- <span style="color: #ff0000;">windows10upgrades@example.com</span> -->



<!-- -----------------------Espacio entre bloques---------------------->
<!-- <tr style="background-color: #ffffff"><td><p style="line-height: 40px;">&nbsp;</p></td></tr> -->

</table>
<!-- end email container -->


</td>
</tr>
</table>


</center>





</body>
</html>
`
},

{
    id: 81,
    name: '81. Difusión Webinar',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-81.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Phones</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            mso-line-height-rule: exactly;
        }
        
        * {
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 600px;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt0                   { background-color: #e8eaea; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }
    </style>


</head>

<body class="bg-color-general" style="margin: 0 auto; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
    <table width="600" class="container600" style="margin: 0 auto; max-width: 600px;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-general">
    <td width="600" style="text-align: center;">
    
    <!--email container-->
    <table width="600" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">
    
    
    
<!-------------------------Header-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 4px 30px 0 30px;" align="center" valign="middle">
    <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td height="80" align="left" valign="middle">
                    <a href="https://example.com" target="_blank">
                        <img src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="Mail Builder" width="auto" height="53" border="0">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>

<!-------------------------Border-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 0;" align="center" valign="middle">
    <table
        style="border-bottom: 3px solid #e8eaea;"
        width="600"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr>
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#e8eaea" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/headers/header-generic-1.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Border-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 0;" align="center" valign="middle">
    <table
        style="border-bottom: 3px solid #ffffff;"
        width="600"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr>
<!-------------------------Titular-------------------------------->
<tr bgcolor="#ff0000" align="center">
<td style="padding: 15px 0px 15px 0px;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 26px; line-height: 30px; color:#FFFFFF; margin: 0; letter-spacing: 4px;">
                        <span style="color: #ffffff; font-weight: bold;">TEAMS:</span>
                        <br>
                        WEBINAR FOR COLLABORATORS
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
</td>
</tr>
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-4.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>




<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 25px 20px 35px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#020202; margin: 0;">
                    Any transformation process requires leaders who act as drivers of change.
                    <br>
                    We invite you as a team leader to take part of this digital evolution
                    <br>
                    by embracing a <b>Collaborator role in the Teams Campaign.</b> 
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>





<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-5.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>




<!-------------------------Texto-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 15px 20px 25px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 26px; color:#020202; margin: 0;">
                    <span style="font-weight: bold; font-size: 16px;">Pre-recorded Webinar</span>
                    <br>
                    <span style="font-weight: bold; font-size: 22px;">TEAMS: </span><span style="font-weight: bold; font-size: 22px; color: #ff0000;">The Evolution of Collaborative Work</span>
                    <br>
                    Available now on Teams Live Events
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>



<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/divider-transparent.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>


<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 20px 20px 20px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 18px; font-weight: BOLD; line-height: 22px; color:#020202; margin: 0; text-transform: uppercase;">
                    What To Expect From This Webinar:
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>


<!-------------------------Border-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 0;" align="center" valign="middle">
    <table
        style="border-bottom: 2px solid #e8eaea;"
        width="600"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr>


<!-------------------------Double Image, Double Text WITHOUT SPACES and PADDING-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 0 0 0 0;" align="center" valign="middle">
<table role="presentation" cellspacing="0" cellpadding="0" border="0">
<tbody>
    <tr valign="top" align="center">
        <td width="293" bgcolor="#ffffff" valign="top" style="padding: 20px 30px;">
            <p style="line-height: 12px;">&nbsp;</p>
            <img
                src="https://html-email-builder.pages.dev/images/others/other-4.png"
                alt="portada"
                width="85" height="85"
                style="display: block;"
            >
            <p style="line-height: 12px;">&nbsp;</p>
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 15px; font-weight: normal; color:#020202; line-height: 22px;">
                Tricks and best features to get
                <br>
                the most out of Teams
            </p>
        </td>
        <td width="12" bgcolor="#ffffff">
            <img
                src="https://html-email-builder.pages.dev/images/others/divider-transparent.png"
                alt="portada"
                width="11" height="auto"
                style="display: block;"
            >
        </td>
        <td width="295" bgcolor="#ffffff" valign="top" style="padding: 20px 10px;">
            <p style="line-height: 12px;">&nbsp;</p>
            <img
                src="https://html-email-builder.pages.dev/images/others/other-1.png"
                alt="portada"
                width="85" height="85"
                style="display: block;"
            >
            <p style="line-height: 12px;">&nbsp;</p>
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 15px; font-weight: normal; color:#020202; line-height: 22px;">
                Creative resources to spread the word
                <br>
                and encourage your teams to adopt
                <br>
                this powerful tool
            </p>
        </td>
    </tr>
</tbody>
</table>
</td>
</tr>



<!-------------------------Primary Button with double background color -------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td align="center" valign="middle">
    <table width="600" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
    <tbody>
        <tr>
            <td width="190" valign="top" style="border-top: 3px solid #ffffff; border-bottom: 3px solid #f1f4f4;">
                <p style="line-height: 20px; background-color: #ffffff;">&nbsp;</p>
                <p style="line-height: 20px; background-color: #f1f4f4;">&nbsp;</p>
            </td>
            <td width="220" height="45" bgcolor="#ff0000" align="center" style="color: #ffffff; border: 3px solid #ff0000; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; text-decoration: none; display: block;">
                <a href="https://example.com"
                style="line-height: 39px; color: #ffffff; background-color: #ff0000; font-size: 14px; font-weight: normal; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width: 100%; display: inline-block; letter-spacing: 1px;">
                    ATTEND THE WEBINAR
                </a>
            </td> 
            <td width="190" valign="top" style="border-top: 3px solid #ffffff; border-bottom: 3px solid #f1f4f4;">
                <p style="line-height: 20px; background-color: #ffffff;">&nbsp;</p>
                <p style="line-height: 20px; background-color: #f1f4f4;">&nbsp;</p>
            </td>
        </tr>
    </tbody>
    </table> 
</td>
</tr>



<!-------------------------Empty Space-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 15px 30px 15px 30px;" align="center" valign="middle">
    <table
        width="100%"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr>



<!-------------------------Teams-------------------------------->
<!-- <tr bgcolor="#e8eaea" align="center"> -->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding-bottom: 20px;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td style="padding: 10px 20px 10px 20px" align="center" valign="middle">
                <img
                    src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png"
                    alt="portada"
                    width="40" height="auto"
                    style="display: block;"
                >
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; line-height: 25px; letter-spacing: 3px;color:#020202; margin: 0;">
                    <span style="color: #5359a7; font-weight: bold; font-size: 20px; line-height: 35px; letter-spacing: 3px;text-decoration: none;">TEAMS</span>
                    <br>
                    THE EVOLUTION OF COLLABORATIVE WORK
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>





<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
    <!-- <img
        src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    > -->
</td>
</tr>

        
        
        
<!-- -----------------------Footer - Español e Ingles------------------------------ -->
<!-------------------------Footer-------------------------------->
<!-- <tr bgcolor="#000000" align="center">
<td style="padding: 0 30px 4px 30px;" align="center" valign="middle">
    <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td height="60" align="left" valign="middle">
                    <a href="https://example.com" target="_blank">
                        <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="40" border="0">
                        <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="40" border="0">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr> -->

        
        
        
    
    
    
<!-- -----------------------Ruta online mail builder---------------------->
<!-- https://html-email-builder.pages.dev/images/others/other-5.png -->


<!-- -----------------------Ruta local ---------------------->
<!-- ./img/ -->


<!-- -----------------------Link con estilo ---------------------->
<!-- <a href="mailto:windows10upgrades@example.com">
    <span style="color: #ff0000; font-weight: bold; text-decoration: underline;">windows10upgrades@example.com</span>
</a> -->

<!-- -----------------------Nueva linea ---------------------->
<!-- <br> -->


<!-- -----------------------Texto en Negrita---------------------->
<!-- <b>Texto en negrita</b> -->


<!-- -----------------------Texto en Color---------------------->
<!-- <span style="color: #ff0000;">windows10upgrades@example.com</span> -->



<!-- -----------------------Espacio entre bloques---------------------->
<!-- <tr style="background-color: #ffffff"><td><p style="line-height: 40px;">&nbsp;</p></td></tr> -->

</table>
<!-- end email container -->


</td>
</tr>
</table>


</center>





</body>
</html>
`
},

{
    id: 82,
    name: '82. Webinar Quiz',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-82.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Phones</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            mso-line-height-rule: exactly;
        }
        
        * {
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 600px;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #C1C1C1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt0                  { background-color: #e8eaea; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-alt5                  { background-color: #DEE2E2; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }
    </style>


</head>

<body class="bg-color-general" style="margin: 0 auto; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
    <table width="600" class="container600" style="margin: 0 auto; max-width: 600px;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-general">
    <td width="600" style="text-align: center;">
    
    <!--email container-->
    <table width="600" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">
    
    
    
<!-------------------------Header-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 4px 30px 0 30px;" align="center" valign="middle">
    <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td height="80" align="left" valign="middle">
                    <a href="https://example.com" target="_blank">
                        <img src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="Mail Builder" width="auto" height="53" border="0">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>

<!-------------------------Border-------------------------------->
<!-- <tr bgcolor="#ffffff" align="center">
<td style="padding: 0;" align="center" valign="middle">
    <table
        style="border-bottom: 3px solid #e8eaea;"
        width="600"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr> -->
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#e8eaea" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/headers/header-generic-1.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>

        
        
        
<!-------------------------Border-------------------------------->
<!-- <tr bgcolor="#ffffff" align="center">
<td style="padding: 0;" align="center" valign="middle">
    <table
        style="border-bottom: 3px solid #ffffff;"
        width="600"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr> -->
<!-------------------------Titular-------------------------------->
<tr bgcolor="#E20714" align="center">
<td style="padding: 15px 0px 15px 0px;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 26px; line-height: 30px; color:#FFFFFF; margin: 0; letter-spacing: 1px;">
                        ¿ESTÁS LISTO PARA EL ÚLTIMO DESAFÍO
                        <br>
                        DE LA CAMPAÑA?
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
</td>
</tr>
<!-------------------------Imagen-------------------------------->
<!-- <tr bgcolor="#ffffff" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-4.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr> -->




<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 25px 20px 35px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#020202; margin: 0;">
                    Seguramente ya eres un experto en <b>Microsoft Teams</b>.
                    <br>
                    Aprovecha la experiencia para demostrar todo lo que sabes.
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>






<!-------------------------Texto-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 0px 0px 0px 0px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td width="55">
                <img
                    src="https://html-email-builder.pages.dev/images/others/other-2.png"
                    alt="portada"
                    width="55" height="auto"
                    style="display: block;"
                >
            </td>
            <td width="490" align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#020202; margin: 0;">
                    <span style="font-weight: normal; font-size: 22px; letter-spacing: 2px;">ÚLTIMO QUIZ SOBRE TEAMS</span>
                    <br>
                    <br>
                    Este es el segundo y último Quiz en contexto de la campaña
                    <br>
                    <span style="font-weight: bold;">"Teams: la evolución del trabajo colaborativo."</span>
                    <br>
                    Al participar, tienes la oportunidad de sumar más puntos
                    <br>
                    para ganar estos maravillosos premios:
                </p>
            </td>
            <td width="55">
                <img
                    src="https://html-email-builder.pages.dev/images/others/other-1.png"
                    alt="portada"
                    width="55" height="auto"
                    style="display: block;"
                >
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>







<!-------------------------Border-------------------------------->
<!-- <tr bgcolor="#ffffff" align="center">
<td style="padding: 0;" align="center" valign="middle">
    <table
        style="border-bottom: 2px solid #e8eaea;"
        width="600"
        role="presentation" cellspacing="0" cellpadding="0">
    </table>
</td>
</tr> -->


<!-------------------------Double Image, Double Text WITHOUT SPACES and PADDING-------------------------------->
<tr bgcolor="#DEE2E2" align="center">
<td style="padding: 0 0 0 0;" align="center" valign="middle">
<table role="presentation" cellspacing="0" cellpadding="0" border="0">
<tbody>
    <tr valign="top" align="center">
        <td width="298" bgcolor="#DEE2E2" valign="top" style="padding: 20px 30px;">
            <p style="line-height: 12px;">&nbsp;</p>
            <img
                src="https://html-email-builder.pages.dev/images/icons/icon-phone.png"
                alt="portada"
                width="173" height="173"
                style="display: block;"
            >
            <p style="line-height: 12px;">&nbsp;</p>
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                <b>Primer premio</b>
                <br>
                Un iPhone SE
            </p>
        </td>
        <td width="4" bgcolor="#ffffff">

        </td>
        <td width="298" bgcolor="#DEE2E2" valign="top" style="padding: 20px 10px;">
            <p style="line-height: 12px;">&nbsp;</p>
            <img
                src="https://html-email-builder.pages.dev/images/icons/icon-phone.png"
                alt="portada"
                width="173" height="173"
                style="display: block;"
            >
            <p style="line-height: 12px;">&nbsp;</p>
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                <b>Segundo al noveno premio</b>
                <br>
                Unos auriculares bluetooth Plantronics
                <br>
                Voyager 8200 UC
            </p>
        </td>
    </tr>
</tbody>
</table>
</td>
</tr>



<!-------------------------Imagen-------------------------------->
<tr bgcolor="#DEE2E2" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/divider-transparent.png"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>


<!-------------------------Texto-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 25px 20px 35px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#020202; margin: 0;">
                    <b>Tienes tiempo de participar hasta el Jueves 4 de marzo.
                    <br>
                    Los ganadores serán anunciados durante las semanas subsiguientes
                    <br>
                    a la fecha de cierre del Quiz.</b>
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>


<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/others/other-4.png"
        width="600" height="auto"
        style="display: block;"
    >
</td>
</tr>


<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
        width="70" height="auto"
        style="display: block;"
    >
</td>
</tr>

<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 15px 20px 30px 20px" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#020202; margin: 0;">
                    <span style="font-weight: bold; font-size: 22px;">¿ESTÁS LISTO PARA TRIUNFAR?</span>                       
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>



<!-------------------------Primary Button-------------------------------->
<!--  Define width, height and bgcolor in TD attributes. 
TD height and color should be equal to A line-height and color.
Border radius probably won't work but it won't hurt either. -->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 0 0 35px 0;" align="center" valign="middle">
    <table style="-webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
    <tbody>
        <tr> 
            <td width="220" height="45" bgcolor="#ff0000" align="center" style="color: #ffffff; border: 3px solid #ff0000; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; text-decoration: none; display: block;">
                <a href="https://example.com"
                style="line-height: 39px; color: #ffffff; background-color: #ff0000; font-size: 14px; font-weight: normal; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width: 100%; display: inline-block; letter-spacing: 1px;">
                    ENTRA AL QUIZ
                </a>
            </td> 
        </tr>
    </tbody>
    </table> 
</td>
</tr>







<!-------------------------Texto-------------------------------->
<!-- <tr bgcolor="#f1f4f4" align="center">
<td style="padding: 30px 10px 30px 10px;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 13px; font-weight: normal; line-height: 18px; color:#595757; margin: 0;">
                    Por favor, no compartas este email.
                    <br>
                    Si tienes problemas de acceso, puedes hacer clic <a href="">
                        <span style="color: #595757; font-weight: bold; text-decoration: underline;">aquí</span>
                    </a>
                    <br>
                    <br>
                    Te garantizamos el anonimato y confidencialidad de tus respuestas.
                    <br>
                    La encuesta y toda la información la gestiona y almacena Survey Partner, que nos facilita informes agregados.
                    <br>
                    Los criterios para reportar información son muy estrictos, evitando identificiar personas con respuestas.
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr> -->






<!-------------------------Teams-------------------------------->
<!-- <tr bgcolor="#e8eaea" align="center"> -->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 20px 0;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td style="padding: 10px 20px 10px 20px" align="center" valign="middle">
                <img
                    src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png"
                    alt="portada"
                    width="40" height="auto"
                    style="display: block;"
                >
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; line-height: 25px; letter-spacing: 3px;color:#020202; margin: 0;">
                    <span style="color: #5359a7; font-weight: bold; font-size: 20px; line-height: 35px; letter-spacing: 3px;text-decoration: none;">TEAMS</span>
                    <br>
                    LA EVOLUCIÓN DEL TRABAJO COLABORATIVO
                </p>
            </td>
        </tr>
    </tbody>
    </table>
</td>
</tr>





<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td align="center" valign="middle">
    <img
        src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    >
    <!-- <img
        src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png"
        alt="portada"
        width="600" height="auto"
        style="display: block;"
    > -->

</td>
</tr>

        
        
        
<!-- -----------------------Footer - Español e Ingles------------------------------ -->
<!-------------------------Footer-------------------------------->
<!-- <tr bgcolor="#000000" align="center">
<td style="padding: 0 30px 4px 30px;" align="center" valign="middle">
    <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td height="60" align="left" valign="middle">
                    <a href="https://example.com" target="_blank">
                        <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="40" border="0">
                        <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="40" border="0">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr> -->

        
        
        
    
    
    
<!-- -----------------------Ruta online mail builder---------------------->
<!-- https://html-email-builder.pages.dev/images/others/other-5.png -->


<!-- -----------------------Ruta local ---------------------->
<!-- ./img/ -->


<!-- -----------------------Link con estilo ---------------------->
<!-- <a href="mailto:windows10upgrades@example.com">
    <span style="color: #ff0000; font-weight: bold; text-decoration: underline;">windows10upgrades@example.com</span>
</a> -->

<!-- -----------------------Nueva linea ---------------------->
<!-- <br> -->


<!-- -----------------------Texto en Negrita---------------------->
<!-- <b>Texto en negrita</b> -->


<!-- -----------------------Texto en Color---------------------->
<!-- <span style="color: #ff0000;">windows10upgrades@example.com</span> -->



<!-- -----------------------Espacio entre bloques---------------------->
<!-- <tr style="background-color: #ffffff"><td><p style="line-height: 40px;">&nbsp;</p></td></tr> -->

</table>
<!-- end email container -->


</td>
</tr>
</table>


</center>





</body>
</html>
`
},

{
    id: 84,
    name: '84. Cierre Campaña Teams',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-84.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Phones</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            mso-line-height-rule: exactly;
        }
        
        * {
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 600px;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt0                  { background-color: #e8eaea; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }
    </style>


</head>

<body class="bg-color-general" style="margin: 0 auto; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
    <table width="600" class="container600" style="margin: 0 auto; max-width: 600px;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-general">
    <td width="600" style="text-align: center;">
    
    <!--email container-->
    <table width="600" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">

        <!-------------------------Header-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 4px 30px 0 30px;" align="center" valign="middle">
        <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td height="80" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="Mail Builder" width="auto" height="53" border="0">
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>

            
            
            
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#e8eaea" align="center">
    <td align="center" valign="middle">
        <img
            src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png"
            alt="portada"
            width="600" height="auto"
            style="display: block;"
        >
    </td>
</tr>

            
            
            
<!-------------------------Border-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 0;" align="center" valign="middle">
        <table
            style="border-bottom: 3px solid #ffffff;"
            width="600"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>
<!-------------------------Titular-------------------------------->
<tr bgcolor="#FF0000" align="center">
    <td style="padding: 15px 0px 2px 0px;" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td align="center" valign="middle">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 26px; line-height: 30px; color:#FFFFFF; margin: 0; letter-spacing: 4px;">
                            CON TEAMS, EL PROTAGONISTA
                            <br>
                            DE LA EVOLUCIÓN ERES TÚ
                        </p>
                    </td>
                </tr>
            </tbody>
            </table>
    </td>
</tr>
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td align="center" valign="middle">
        <img
            src="https://html-email-builder.pages.dev/images/others/other-6.png"
            alt="portada"
            width="600" height="auto"
            style="display: block;"
        >
    </td>
</tr>

            
            
            
<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 35px 20px" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#020202; margin: 0;">
                        Llegamos al final de la <b>Campaña Teams</b> y queremos compartir lo mejor que pasó durante este camino recorrido: 
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>


<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td align="center" valign="middle">
        <img
            src="https://html-email-builder.pages.dev/images/others/divider-transparent.png"
            alt="portada"
            width="600" height="auto"
            style="display: block;"
        >
    </td>
</tr>

<!-------------------------Empty Space-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 15px 30px 15px 30px;" align="center" valign="middle">
        <table
            width="100%"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>


<!-------------------------Triple Image, Triple Text WITH SPACES-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 0;" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr valign="top" align="center">
                <td width="197" bgcolor="#f1f4f4" valign="top" style="padding: 20px 15px;">
                    <img
                        src="https://html-email-builder.pages.dev/images/others/other-5.png"
                        alt="portada"
                        width="70" height="auto"
                        style="display: block;"
                    >
                    <p style="line-height: 12px;">&nbsp;</p>
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                        Testimonios de tus colegas sobre su experiencia con <b>Teams.</b>
                    </p>
                </td>
                <td width="4"></td>
                <td width="198" bgcolor="#f1f4f4" valign="top" style="padding: 20px 15px;">
                    <img
                        src="https://html-email-builder.pages.dev/images/others/other-3.png"
                        alt="portada"
                        width="70" height="auto"
                        style="display: block;"
                    >
                    <p style="line-height: 12px;">&nbsp;</p>
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                        El ranking
                        <br>
                        de los ganadores
                        <br>
                        del <b>Quiz Teams.</b>
                    </p>
                </td>
                <td width="4"></td>
                <td width="197" bgcolor="#f1f4f4" valign="top" style="padding: 20px 15px;">
                    <img
                        src="https://html-email-builder.pages.dev/images/others/other-2.png"
                        alt="portada"
                        width="70" height="auto"
                        style="display: block;"
                    >
                    <p style="line-height: 12px;">&nbsp;</p>
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                                El <b>Espacio Teams</b> para
                                <br>
                                seguir evolucionando en
                                <br>
                                el trabajo colaborativo.
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>

            
            
            
<!-------------------------Empty Space-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 15px 30px;" align="center" valign="middle">
        <table
            width="100%"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>

            
            
            
<!-------------------------Primary Button with double background color -------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 0;" align="center" valign="middle">
        <table width="600" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
        <tbody>
            <tr>
                <td width="135" height="23" valign="top" style="border-top: 3px solid #f1f4f4; border-bottom: 3px solid #ffffff;">
                    <p style="line-height: 20px; background-color: #f1f4f4;">&nbsp;</p>
                    <p style="line-height: 20px; background-color: #ffffff;">&nbsp;</p>
                </td>
                <td width="340" height="46" bgcolor="#ff0000" align="center" style="color: #ffffff; border: 3px solid #ff0000; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; text-decoration: none; display: block;">
                    <a href=""
                    style="line-height: 39px; color: #ffffff; background-color: #ff0000; font-size: 15px; font-weight: bold; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width:100%; display:inline-block; letter-spacing: 2px;">
                        ACCEDE A LA NOTICIA
                    </a>
                </td> 
                <td width="135" height="23" valign="top" style="border-top: 3px solid #f1f4f4; border-bottom: 3px solid #ffffff;">
                    <p style="line-height: 20px; background-color: #f1f4f4;">&nbsp;</p>
                    <p style="line-height: 20px; background-color: #ffffff;">&nbsp;</p>
                </td>
            </tr>
        </tbody>
        </table> 
    </td>
</tr>

<!-------------------------Empty Space-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 15px 30px 15px 30px;" align="center" valign="middle">
        <table
            width="100%"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>


<!-------------------------Imagen-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td align="center" valign="middle">
        <img
            src="https://html-email-builder.pages.dev/images/others/other-6.png"
            alt="portada"
            width="600" height="auto"
            style="display: block;"
        >
    </td>
</tr>


<!-------------------------Teams-------------------------------->
<!-- <tr bgcolor="#e8eaea" align="center"> -->
    <tr bgcolor="#f1f4f4" align="center">
        <td style="padding-bottom: 20px; padding-top: 20px;" align="center" valign="middle">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td style="padding: 10px 20px 10px 20px" align="center" valign="middle">
                        <img
                            src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png"
                            alt="portada"
                            width="40" height="auto"
                            style="display: block;"
                        >
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; line-height: 25px; letter-spacing: 3px;color:#020202; margin: 0;">
                            <span style="color: #5359a7; font-weight: bold; font-size: 20px; line-height: 35px; letter-spacing: 3px;text-decoration: none;">TEAMS</span>
                            <br>
                            LA EVOLUCIÓN DEL TRABAJO COLABORATIVO
                        </p>
                    </td>
                </tr>
            </tbody>
            </table>
        </td>
    </tr>
    
    
    <!-------------------------Imagen-------------------------------->
    <tr bgcolor="#f1f4f4" align="center">
        <td align="center" valign="middle">
            <img
                src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png"
                alt="portada"
                width="600" height="auto"
                style="display: block;"
            >
            <!-- <img
                src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png"
                alt="portada"
                width="600" height="auto"
                style="display: block;"
            > -->
    
        </td>
    </tr>

            
            
            
        
        
        
    <!-- -----------------------Ruta online mail builder---------------------->
    <!-- https://html-email-builder.pages.dev/images/others/other-5.png -->
    
    
    <!-- -----------------------Ruta local ---------------------->
    <!-- ./img/ -->
    
    
    <!-- -----------------------Link con estilo ---------------------->
    <!-- <a href="mailto:windows10upgrades@example.com">
        <span style="color: #ff0000; font-weight: bold; text-decoration: underline;">windows10upgrades@example.com</span>
    </a> -->
    
    <!-- -----------------------Nueva linea ---------------------->
    <!-- <br> -->
    
    
    <!-- -----------------------Texto en Negrita---------------------->
    <!-- <b>Texto en negrita</b> -->
    
    
    <!-- -----------------------Texto en Color---------------------->
    <!-- <span style="color: #ff0000;">windows10upgrades@example.com</span> -->
    
    
    
    <!-- -----------------------Espacio entre bloques---------------------->
    <!-- <tr style="background-color: #ffffff"><td><p style="line-height: 40px;">&nbsp;</p></td></tr> -->
    
    </table>
    <!-- end email container -->
    
    
    </td>
    </tr>
    </table>
    
    
    </center>
    
    
    
    
    
    </body>
    </html>
`
},

{
    id: 85,
    name: '85. Newsletter Español',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-85.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Phones</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            mso-line-height-rule: exactly;
        }
        
        * {
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 600px;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt0                  { background-color: #e8eaea; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }
    </style>


</head>

<body class="bg-color-general" style="margin: 0 auto; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
    <table width="600" class="container600" style="margin: 0 auto; max-width: 600px;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-general">
    <td width="600" style="text-align: center;">
    
    <!--email container-->
    <table width="600" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">

        <!-------------------------Header-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 4px 30px 0 30px;" align="center" valign="middle">
        <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td height="80" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="Mail Builder" width="auto" height="53" border="0">
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>

            
            
            
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#e8eaea" align="center">
    <td align="center" valign="middle">
        <img
            src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png"
            alt="portada"
            width="600" height="auto"
            style="display: block;"
        >
    </td>
</tr>

            
            
            
<!-------------------------Border-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 0;" align="center" valign="middle">
        <table
            style="border-bottom: 3px solid #ffffff;"
            width="600"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>
<!-------------------------Titular-------------------------------->
<tr bgcolor="#FF0000" align="center">
    <td style="padding: 15px 0px 2px 0px;" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td align="center" valign="middle">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 26px; line-height: 30px; color:#FFFFFF; margin: 0; letter-spacing: 4px;">
                            LIVE SERVICENOW TRAINING
                            <br>
                            WEBINAR
                        </p>
                    </td>
                </tr>
            </tbody>
            </table>
    </td>
</tr>
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td align="center" valign="middle">
        <img
            src="https://html-email-builder.pages.dev/images/others/other-6.png"
            alt="portada"
            width="600" height="auto"
            style="display: block;"
        >
    </td>
</tr>


<!-------------------------Empty Space-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 5px 30px 8px 30px;" align="center" valign="middle">
        <table
            width="100%"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>

<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td align="center" valign="middle">
        <img
            src="https://html-email-builder.pages.dev/images/others/other-1.png"
            alt="portada"
            width="70" height="auto"
            style="display: block;"
        >
    </td>
</tr>

            
            
            
<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 10px 20px 25px 20px" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 18px; font-weight: normal; line-height: 22px; color:#020202; margin: 0;">
                        <b>Thursday, April 15th - 10 AM</b>
                        <br>
                        <b>At Teams live events</b>
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>


<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td align="center" valign="middle">
        <img
            src="https://html-email-builder.pages.dev/images/others/divider-transparent.png"
            alt="portada"
            width="600" height="auto"
            style="display: block;"
        >
    </td>
</tr>

<!-------------------------Empty Space-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 15px 30px 15px 30px;" align="center" valign="middle">
        <table
            width="100%"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>



<!-------------------------Texto-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 10px 20px 5px 20px" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#020202; margin: 0;">
                        <span style="color: #ff0000; font-size: 18px; font-weight: bolder;">DISCOVER SERVICENOW</span>
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>

<!-------------------------Texto-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 5px 20px 25px 20px" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#020202; margin: 0;">
                        Our online help desk ticketing tool
                        <br>
                        where asking for ICT support and assistance.
                        <br>
                        <br>
                        <span style="font-weight: bold;">Here's what you can learn:</span>
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>


<!-------------------------Triple Image, Triple Text WITH SPACES-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 0;" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr valign="top" align="center">
                <td width="198" bgcolor="#f1f4f4" valign="top" style="padding: 20px 0px;">
                    <img
                        src="https://html-email-builder.pages.dev/images/icons/icon-check.png"
                        alt="portada"
                        width="70" height="auto"
                        style="display: block;"
                    >
                    <p style="line-height: 12px;">&nbsp;</p>
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 14px; font-weight: normal; color:#020202; line-height: 18px;">
                        How to create an incident
                        <br>
                        when any of your ICT tools
                        <br>
                        is no longer working properly.
                    </p>
                </td>
                <td width="3"></td>
                <td width="198" bgcolor="#f1f4f4" valign="top" style="padding: 20px 15px;">
                    <img
                        src="https://html-email-builder.pages.dev/images/icons/icon-gear.png"
                        alt="portada"
                        width="70" height="auto"
                        style="display: block;"
                    >
                    <p style="line-height: 12px;">&nbsp;</p>
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 14px; font-weight: normal; color:#020202; line-height: 18px;">
                        How to track
                        <br>
                        your tickets.
                    </p>
                </td>
                <td width="3"></td>
                <td width="198" bgcolor="#f1f4f4" valign="top" style="padding: 20px 0px;">
                    <img
                        src="https://html-email-builder.pages.dev/images/icons/icon-gear.png"
                        alt="portada"
                        width="70" height="auto"
                        style="display: block;"
                    >
                    <p style="line-height: 12px;">&nbsp;</p>
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 14px; font-weight: normal; color:#020202; line-height: 18px;">
                        How to make a request
                        <br>
                        if you need a device, installation
                        <br>
                        or access to an application.
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>

            
            
            
<!-------------------------Empty Space-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 15px 30px;" align="center" valign="middle">
        <table
            width="100%"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>



<!-------------------------Texto-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 5px 20px 5px 20px" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#020202; margin: 0;">
                        <span style="font-weight: bold;">Most of all, there will be a Q&A session!</span>
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>



<!-------------------------Primary Button-------------------------------->
<!--  Define width, height and bgcolor in TD attributes. 
TD height and color should be equal to A line-height and color.
Border radius probably won't work but it won't hurt either. -->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 20px 0 40px 0;" align="center" valign="middle">
        <table style="-webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
        <tbody>
            <tr> 
                <td width="250" height="45" bgcolor="#ff0000" align="center" style="color: #ffffff; border: 3px solid #ff0000; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; text-decoration: none; display: block;">
                    <a href=""
                    style="line-height: 39px; color: #ffffff; background-color: #ff0000; font-size: 15px; font-weight: normal; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width: 100%; display: inline-block; letter-spacing: 2px;">
                        JOIN THE WEBINAR
                    </a>
                </td> 
            </tr>
        </tbody>
        </table> 
    </td>
</tr>


<!-------------------------Footer-------------------------------->
<tr bgcolor="#000000" align="center">
    <td style="padding: 0 30px 4px 30px;" align="center" valign="middle">
        <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td height="80" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="40" border="0">
                            <!-- <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="40" border="0"> -->
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>

            
            
        
        
        
    <!-- -----------------------Ruta online mail builder---------------------->
    <!-- https://html-email-builder.pages.dev/images/others/other-5.png -->
    
    
    <!-- -----------------------Ruta local ---------------------->
    <!-- ./img/ -->
    
    
    <!-- -----------------------Link con estilo ---------------------->
    <!-- <a href="mailto:windows10upgrades@example.com">
        <span style="color: #ff0000; font-weight: bold; text-decoration: underline;">windows10upgrades@example.com</span>
    </a> -->
    
    <!-- -----------------------Nueva linea ---------------------->
    <!-- <br> -->
    
    
    <!-- -----------------------Texto en Negrita---------------------->
    <!-- <b>Texto en negrita</b> -->
    
    
    <!-- -----------------------Texto en Color---------------------->
    <!-- <span style="color: #ff0000;">windows10upgrades@example.com</span> -->
    
    
    
    <!-- -----------------------Espacio entre bloques---------------------->
    <!-- <tr style="background-color: #ffffff"><td><p style="line-height: 40px;">&nbsp;</p></td></tr> -->
    
    </table>
    <!-- end email container -->
    
    
    </td>
    </tr>
    </table>
    
    
    </center>
    
    
    
    
    
    </body>
    </html>
`
},

{
    id: 87,
    name: '87. Regularización de Puesto',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-87.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Phones</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            mso-line-height-rule: exactly;
        }
        
        * {
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 600px;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt0                  { background-color: #e8eaea; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }
    </style>


</head>

<body class="bg-color-general" style="margin: 0 auto; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
    <table width="600" class="container600" style="margin: 0 auto; max-width: 600px;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-general">
    <td width="600" style="text-align: center;">
    
    <!--email container-->
    <table width="600" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">

        <!-------------------------Header-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 4px 30px 0 30px;" align="center" valign="middle">
        <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td height="80" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="Mail Builder" width="auto" height="53" border="0">
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>

            
            
            
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#e8eaea" align="center">
    <td align="center" valign="middle">
        <img
            src="https://html-email-builder.pages.dev/images/headers/header-generic-1.png"
            alt="portada"
            width="600" height="auto"
            style="display: block;"
        >
    </td>
</tr>

            
            
            
<!-------------------------Border-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 0;" align="center" valign="middle">
        <table
            style="border-bottom: 3px solid #ffffff;"
            width="600"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>
<!-------------------------Titular-------------------------------->
<tr bgcolor="#FF0000" align="center">
    <td style="padding: 20px 0px 20px 0px;" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td align="center" valign="middle">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 26px; font-weight: bold; line-height: 30px; color:#FFFFFF; margin: 0; letter-spacing: 3px;">
                            PRÓXIMAMENTE REEMPLAZAREMOS
                            <br>
                            TU ORDENADOR PORTÁTIL
                        </p>
                    </td>
                </tr>
            </tbody>
            </table>
    </td>
</tr>
<!-------------------------Imagen-------------------------------->
<!-- <tr bgcolor="#ffffff" align="center">
    <td align="center" valign="middle">
        <img
            src="https://html-email-builder.pages.dev/images/others/other-6.png"
            alt="portada"
            width="600" height="auto"
            style="display: block;"
        >
    </td>
</tr> -->




<!-------------------------Texto-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 40px 0 40px 0;" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 20px; font-weight: bold; line-height: 22px; color:#020202; margin: 0;">
                        <b>¿Qué es lo que va a pasar?</b>
                    </p>
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 15px; font-weight: normal; line-height: 15px; color:#020202; margin: 0;">&nbsp;</p>
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 17px; font-weight: normal;color:#020202; line-height: 22px;">
                        Ante todo, <b>no tienes que hacer nada</b>. Una persona del equipo de soporte
                        <br>
                        técnico <b>se pondrá en contacto contigo</b> durante los próximos días
                        <br>
                        para coordinar la gestión mediante la cual tu ordenador portátil actual
                        <br>
                        será reemplazado por otro.
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>


<!-------------------------Border-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 0;" align="center" valign="middle">
        <table
            style="border-bottom: 3px solid #ffffff;"
            width="600"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>



<!-------------------------Texto-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 40px 0 40px 0;" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 20px; font-weight: bold; line-height: 22px; color:#020202; margin: 0;">
                        <b>¿Cuál es el motivo?</b>
                    </p>
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 15px; font-weight: normal; line-height: 15px; color:#020202; margin: 0;">&nbsp;</p>
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 17px; font-weight: normal;color:#020202; line-height: 22px;">
                        Durante los primeros meses de la Pandemia, nos aseguramos de que todos
                        <br>
                        los empleados tuvieran un ordenador portátil para trabajar desde casa.
                        <br>
                        Ahora que nos encontramos en otra etapa, <b>necesitamos reorganizar la
                        <br>
                        distribución de los equipos</b> para cada puesto de trabajo.
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>







<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 35px 20px 40px 20px" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 18px; font-weight: normal; line-height: 18px; color:#020202; margin: 0;">
                        <span style="font-weight: bold;">¡Muchas gracias por tu comprensión y colaboración!</span> 
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>





<!-------------------------Footer-------------------------------->
<tr bgcolor="#000000" align="center">
    <td style="padding: 0 30px 4px 30px;" align="center" valign="middle">
        <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td height="80" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="40" border="0">
                            <!-- <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="40" border="0"> -->
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>

            
            
        
        
        
    <!-- -----------------------Ruta online mail builder---------------------->
    <!-- https://html-email-builder.pages.dev/images/others/other-5.png -->
    
    
    <!-- -----------------------Ruta local ---------------------->
    <!-- ./img/ -->
    
    
    <!-- -----------------------Link con estilo ---------------------->
    <!-- <a href="mailto:windows10upgrades@example.com">
        <span style="color: #ff0000; font-weight: bold; text-decoration: underline;">windows10upgrades@example.com</span>
    </a> -->
    
    <!-- -----------------------Nueva linea ---------------------->
    <!-- <br> -->
    
    
    <!-- -----------------------Texto en Negrita---------------------->
    <!-- <b>Texto en negrita</b> -->
    
    
    <!-- -----------------------Texto en Color---------------------->
    <!-- <span style="color: #ff0000;">windows10upgrades@example.com</span> -->
    
    
    
    <!-- -----------------------Espacio entre bloques---------------------->
    <!-- <tr style="background-color: #ffffff"><td><p style="line-height: 40px;">&nbsp;</p></td></tr> -->
    
    </table>
    <!-- end email container -->
    
    
    </td>
    </tr>
    </table>
    
    
    </center>
    
    
    
    
    
    </body>
    </html>
`
},

{
    id: 88,
    name: '88. Office 365',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-88.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Actualización Office 365</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            mso-line-height-rule: exactly;
        }
        
        * {
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 600px;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt0                  { background-color: #e8eaea; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }

        .bg-color-text-gray             { background-color: #595757; }
        .bg-color-orange                { background-color: #ff7900; }
    </style>


</head>

<body class="bg-color-general" style="margin: 0 auto; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
    <table width="600" class="container600" style="margin: 0 auto; max-width: 600px;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-general">
    <td width="600" style="text-align: center;">
    
    <!--email container-->
    <table width="600" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">

        <!-------------------------Header-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 4px 30px 0 30px;" align="center" valign="middle">
        <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td height="80" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="Mail Builder" width="auto" height="53" border="0">
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>

            
            
            
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#e8eaea" align="center">
    <td align="center" valign="middle">
        <img
            src="https://html-email-builder.pages.dev/images/headers/header-generic-1.png"
            alt="portada"
            width="600" height="auto"
            style="display: block;"
        >
    </td>
</tr>

            
            
            
<!-------------------------Border-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 0;" align="center" valign="middle">
        <table
            style="border-bottom: 3px solid #ffffff;"
            width="600"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>
<!-------------------------Titular-------------------------------->
<tr bgcolor="#FF0000" align="center">
    <td style="padding: 20px 0px 20px 0px;" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td align="center" valign="middle">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 28px; line-height: 30px; color:#FFFFFF; margin: 0; letter-spacing: 4px;">
                            ELIGE EL MOMENTO MÁS CÓMODO
                            <br>
                            E INSTALA LA ACTUALIZACIÓN
                            <br>
                            DE OFFICE 365
                        </p>
                    </td>
                </tr>
            </tbody>
            </table>
    </td>
</tr>
<!-------------------------Imagen-------------------------------->
<!-- <tr bgcolor="#ffffff" align="center">
    <td align="center" valign="middle">
        <img
            src="https://html-email-builder.pages.dev/images/others/other-6.png"
            alt="portada"
            width="600" height="auto"
            style="display: block;"
        >
    </td>
</tr> -->


<!-------------------------Empty Space-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 20px 30px 8px 30px;" align="center" valign="middle">
        <table
            width="100%"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>




<!-------------------------Imagen-------------------------------->
<tr bgcolor="#F1F4F4" align="center">
    <td align="center" valign="middle">
        <img
            src="https://html-email-builder.pages.dev/images/others/other-6.png"
            alt="portada"
            width="78" height="auto"
            style="display: block;"
        >
    </td>
</tr>


<!-------------------------Empty Space-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 2px 30px;" align="center" valign="middle">
        <table
            width="100%"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>



<!-------------------------Texto-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 5px 20px 40px 20px" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 20px; font-weight: normal; line-height:22px; color:#020202; margin: 0;">
                        <span style="font-weight: bold;">Al actualizar tu suite de herramientas, la experiencia
                        <br>    
                        de tu entorno digital de trabajo mejora.</span>
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>


<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 30px 20px 0px 20px" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 20px; color:#595757; margin: 0; text-transform: uppercase;">
                        <b>Ten en cuenta estas recomendaciones
                        <br>    
                        antes de hacerlo:</b>
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>




<!-------------------------Triple Image, Triple Text WITHOUT SPACES and PADDING-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 0 0 0 0;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr valign="top" align="center">
            <td width="200" bgcolor="#ffffff" valign="top" style="padding: 20px 5px 20px 5px;">
                <img
                    src="https://html-email-builder.pages.dev/images/others/other-3.png"
                    alt="portada"
                    width="50" height="auto"
                    style="display: block;"
                >
                <p style="line-height: 12px;">&nbsp;</p>
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 14px; font-weight: normal; color:#020202; line-height: 22px;">
                    La instalación puede durar <b>entre</b> 
                    <br>
                    <b>20 y 30 minutos</b> y algunas
                    <br>
                    funciones estarán inactivas
                    <br>
                    durante ese tiempo.
                </p>
            </td>
            <td width="200" bgcolor="#ffffff" valign="top" style="padding: 20px 5px 20px 5px;">
                <img
                    src="https://html-email-builder.pages.dev/images/others/other-2.png"
                    alt="portada"
                    width="50" height="auto"
                    style="display: block;"
                >
                <p style="line-height: 12px;">&nbsp;</p>
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 14px; font-weight: normal; color:#020202; line-height: 22px;">
                    Busca el mejor momento
                    <br>
                    para hacerlo y <b>evitar así</b>
                    <br>
                    <b>la interrupción</b> de lo que estés
                    <br>
                    realizando en tu equipo. 
                </p>
            </td>
            <td width="200" bgcolor="#ffffff" valign="top" style="padding: 20px 5px 20px 5px;">
                <img
                    src="https://html-email-builder.pages.dev/images/others/other-4.png"
                    alt="portada"
                    width="50" height="auto"
                    style="display: block;"
                >
                <p style="line-height: 12px;">&nbsp;</p>
                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 14px; font-weight: normal; color:#020202; line-height: 22px;">
                    <b>Guarda y cierra</b>
                    <br>
                    todos los archivos de Office
                    <br>
                    y el correo electrónico
                    <br>
                    también. 
                </p>
            </td>
        </tr>
    </tbody>
    </table>
    </td>
    </tr>

<!-------------------------Empty Space-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 10px 30px 10px 30px;" align="center" valign="middle">
        <table
            width="100%"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>

<!-------------------------Texto-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 30px 20px 0px 20px" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 18px; font-weight: bold; line-height: 22px; color:#020202; margin: 0;">
                        Al hacer clic en el botón de abajo, entrarás al Centro de Software de la aplicación. Allí haz clic de nuevo en [ INSTALL ].
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>






<!-------------------------Primary Button-------------------------------->
<!--  Define width, height and bgcolor in TD attributes. 
TD height and color should be equal to A line-height and color.
Border radius probably won't work but it won't hurt either. -->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 20px 0 30px 0;" align="center" valign="middle">
        <table style="-webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
        <tbody>
            <tr> 
                <td width="280" height="45" bgcolor="#ff0000" align="center" style="color: #ffffff; border: 3px solid #ff0000; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; text-decoration: none; display: block;">
                    <a href="softwarecenter:SoftwareID=ScopeId_28912F2D-1AD3-4345-B0C1-F8483157D171/Application_82d5eca4-ca39-4c6f-9e95-eadc0516ec71"
                    style="line-height: 39px; color: #ffffff; background-color: #ff0000; font-size: 15px; font-weight: normal; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width: 100%; display: inline-block; letter-spacing: 3px;">
                        ACTUALIZAR OFFICE 365
                    </a>
                </td> 
            </tr>
        </tbody>
        </table> 
    </td>
</tr>




<!-------------------------Empty Space-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 15px 30px 15px 30px;" align="center" valign="middle">
        <table
            width="100%"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>

<!-------------------------Imagen-------------------------------->
<!-- <tr bgcolor="#ffffff" align="center">
    <td align="center" valign="middle">
        <img
            src="https://html-email-builder.pages.dev/images/others/other-3.png"
            alt="portada"
            width="35" height="auto"
            style="display: block;"
        >
    </td>
</tr> -->


<!-------------------------Empty Space-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 2px 30px;" align="center" valign="middle">
        <table
            width="100%"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>



<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 5px 20px 5px 20px" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 18px; color:#020202; margin: 0;">
                        Para tu comodidad, aprovecha a hacerlo tan pronto puedas y antes de que el sistema lo realice automáticamente.
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>




<!-------------------------Empty Space-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 15px 30px 20px 30px;" align="center" valign="middle">
        <table
            width="100%"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>






<!-------------------------Footer-------------------------------->
<tr bgcolor="#000000" align="center">
    <td style="padding: 0 30px 4px 30px;" align="center" valign="middle">
        <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td height="80" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="40" border="0">
                            <!-- <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="40" border="0"> -->
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>

            
            
        
        
        
    <!-- -----------------------Ruta online mail builder---------------------->
    <!-- https://html-email-builder.pages.dev/images/others/other-5.png -->
    
    
    <!-- -----------------------Ruta local ---------------------->
    <!-- ./img/ -->
    
    
    <!-- -----------------------Link con estilo ---------------------->
    <!-- <a href="mailto:windows10upgrades@example.com">
        <span style="color: #ff0000; font-weight: bold; text-decoration: underline;">windows10upgrades@example.com</span>
    </a> -->
    
    <!-- -----------------------Nueva linea ---------------------->
    <!-- <br> -->
    
    
    <!-- -----------------------Texto en Negrita---------------------->
    <!-- <b>Texto en negrita</b> -->
    
    
    <!-- -----------------------Texto en Color---------------------->
    <!-- <span style="color: #ff0000;">windows10upgrades@example.com</span> -->
    
    
    
    <!-- -----------------------Espacio entre bloques---------------------->
    <!-- <tr style="background-color: #ffffff"><td><p style="line-height: 40px;">&nbsp;</p></td></tr> -->
    
    </table>
    <!-- end email container -->
    
    
    </td>
    </tr>
    </table>
    
    
    </center>
    
    
    
    
    
    </body>
    </html>
`
},

{
    id: 89,
    name: '89. SAP GUI Update',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-89.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Actualización de SAP GUI</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            mso-line-height-rule: exactly;
        }
        
        * {
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 600px;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt0                  { background-color: #e8eaea; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }
    </style>


</head>

<body class="bg-color-general" style="margin: 0 auto; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
    <table width="600" class="container600" style="margin: 0 auto; max-width: 600px;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-general">
    <td width="600" style="text-align: center;">
    
    <!--email container-->
    <table width="600" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">

        <!-------------------------Header-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 4px 30px 0 30px;" align="center" valign="middle">
        <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td height="80" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="Mail Builder" width="auto" height="53" border="0">
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>

            
            
            
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#e8eaea" align="center">
    <td align="center" valign="middle">
        <img
            src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png"
            alt="portada"
            width="600" height="auto"
            style="display: block;"
        >
    </td>
</tr>

            
            
            
<!-------------------------Border-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 0;" align="center" valign="middle">
        <table
            style="border-bottom: 3px solid #ffffff;"
            width="600"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>
<!-------------------------Titular-------------------------------->
<tr bgcolor="#FF0000" align="center">
    <td style="padding: 30px 0px 30px 0px;" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td align="center" valign="middle">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 26px; line-height: 30px; color:#FFFFFF; margin: 0; letter-spacing: 4px;">
                            INSTALA LA ACTUALIZACIÓN DE SAP GUI
                            <br>
                            ELIGE MOMENTO MÁS CÓMODO PARA TI
                        </p>
                    </td>
                </tr>
            </tbody>
            </table>
    </td>
</tr>
<!-------------------------Imagen-------------------------------->
<!-- <tr bgcolor="#ffffff" align="center">
    <td align="center" valign="middle">
        <img
            src="https://html-email-builder.pages.dev/images/others/other-6.png"
            alt="portada"
            width="600" height="auto"
            style="display: block;"
        >
    </td>
</tr> -->


<!-------------------------Empty Space-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 5px 30px 8px 30px;" align="center" valign="middle">
        <table
            width="100%"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>



<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 10px 20px 25px 20px" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 18px; font-weight: normal; line-height: 22px; color:#020202; margin: 0;">
                        <b>Ten en cuenta estas recomendaciones antes de hacerlo:</b>
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>







<!-----------------------------Banner Image and Title--------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 10px 0;" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr align="center">
                <td width="600" align="center" valign="middle">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr align="left" valign="middle">
                            <td width="80" style="padding: 10px;" bgcolor="#f1f4f4">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                    <tr valign="middle">
                                        <td>
                                            <img src="https://html-email-builder.pages.dev/images/others/other-2.png" alt="Chats" width="80" height="80" style="display: block;">
                                        </td>
                                    </tr>
                                </tbody>
                                </table>
                            </td>
                            <td width="480" bgcolor="#f1f4f4" valign="middle" style="padding: 0 10px;">
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 17px; font-weight: normal;color:#020202; line-height: 22px;">
                                    La instalación puede durar <b>varios minutos</b> y algunas funciones estarán inactivas durante ese tiempo.
                                </p>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>


<!-------------------------Border-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 0;" align="center" valign="middle">
        <table
            style="border-bottom: 3px solid #ffffff;"
            width="600"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>



<!-----------------------------Banner Image and Title--------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 10px 0;" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr align="center">
                <td width="600" align="center" valign="middle">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr align="left" valign="middle">
                            <td width="80" style="padding: 10px;" bgcolor="#f1f4f4">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                    <tr valign="middle">
                                        <td>
                                            <img src="https://html-email-builder.pages.dev/images/others/other-3.png" alt="Chats" width="80" height="80" style="display: block;">
                                        </td>
                                    </tr>
                                </tbody>
                                </table>
                            </td>
                            <td width="480" bgcolor="#f1f4f4" valign="middle" style="padding: 0 10px;">
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 17px; font-weight: normal;color:#020202; line-height: 22px;">
                                    Busca el mejor momento para hacerlo y <b>evitar así la interrupción</b> de lo que estés realizando en tu equipo. 
                                </p>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>


<!-------------------------Border-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 0;" align="center" valign="middle">
        <table
            style="border-bottom: 3px solid #ffffff;"
            width="600"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>



<!-----------------------------Banner Image and Title--------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 10px 0;" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr align="center">
                <td width="600" align="center" valign="middle">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr align="left" valign="middle">
                            <td width="80" style="padding: 10px;" bgcolor="#f1f4f4">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                    <tr valign="middle">
                                        <td>
                                            <img src="https://html-email-builder.pages.dev/images/others/other-4.png" alt="Chats" width="80" height="80" style="display: block;">
                                        </td>
                                    </tr>
                                </tbody>
                                </table>
                            </td>
                            <td width="480" bgcolor="#f1f4f4" valign="middle" style="padding: 0 10px;">
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 17px; font-weight: normal;color:#020202; line-height: 22px;">
                                    Guarda tu trabajo y cierra el programa SAP. Te recomendamos cerrar también Excel.
                                </p>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>



<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 30px 20px 0px 20px" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 18px; font-weight: bold; line-height: 22px; color:#020202; margin: 0;">
                        Al hacer clic en el botón de abajo, entrarás al Centro de Software de la aplicación. Allí haz clic de nuevo en [ INSTALL ].
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>





<!-------------------------Border-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 0;" align="center" valign="middle">
        <table
            style="border-bottom: 3px solid #ffffff;"
            width="600"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>





<!-------------------------Empty Space-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 10px 30px 15px 30px;" align="center" valign="middle">
        <table
            width="100%"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>





<!-------------------------Primary Button-------------------------------->
<!--  Define width, height and bgcolor in TD attributes. 
TD height and color should be equal to A line-height and color.
Border radius probably won't work but it won't hurt either. -->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 0px 0 30px 0;" align="center" valign="middle">
        <table style="-webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
        <tbody>
            <tr> 
                <td width="280" height="45" bgcolor="#ff0000" align="center" style="color: #ffffff; border: 3px solid #ff0000; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; text-decoration: none; display: block;">
                    <a href="softwarecenter:SoftwareID=ScopeId_28912F2D-1AD3-4345-B0C1-F8483157D171/Application_78cc8594-8285-41e3-99f8-efa73df40598"
                    style="line-height: 39px; color: #ffffff; background-color: #ff0000; font-size: 15px; font-weight: normal; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width: 100%; display: inline-block; letter-spacing: 3px;">
                        ACTUALIZAR SAP GUI
                    </a>
                </td> 
            </tr>
        </tbody>
        </table> 
    </td>
</tr>


<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td align="center" valign="middle">
        <img
            src="https://html-email-builder.pages.dev/images/others/other-4.png"
            alt="portada"
            width="35" height="auto"
            style="display: block;"
        >
    </td>
</tr>


<!-------------------------Empty Space-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 2px 30px;" align="center" valign="middle">
        <table
            width="100%"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>



<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 5px 20px 5px 20px" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 18px; color:#020202; margin: 0;">
                        Para tu comodidad, <span style="font-weight: bold;">aprovecha a hacerlo tan pronto puedas</span> y antes de que el sistema
<br>
                        lo realice automáticamente.
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>




<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 15px 20px 55px 20px" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 14px; font-weight: normal; line-height: 18px; color:#020202; margin: 0;">
                        Al instalarse la nueva versión, continuarás trabajando con tu<br> programa de siempre, no notarás ningún cambio en la apariencia de SAP. <br>Esta actualización es necesaria para garantizar el soporte de la herramienta. 
                        <br><br><b>¡Gracias por tu colaboración!</b>
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>





<!-------------------------Footer-------------------------------->
<tr bgcolor="#000000" align="center">
    <td style="padding: 0 30px 4px 30px;" align="center" valign="middle">
        <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td height="80" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="40" border="0">
                            <!-- <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="40" border="0"> -->
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>

            
            
        
        
        
    <!-- -----------------------Ruta online mail builder---------------------->
    <!-- https://html-email-builder.pages.dev/images/others/other-5.png -->
    
    
    <!-- -----------------------Ruta local ---------------------->
    <!-- ./img/ -->
    
    
    <!-- -----------------------Link con estilo ---------------------->
    <!-- <a href="mailto:windows10upgrades@example.com">
        <span style="color: #ff0000; font-weight: bold; text-decoration: underline;">windows10upgrades@example.com</span>
    </a> -->
    
    <!-- -----------------------Nueva linea ---------------------->
    <!-- <br> -->
    
    
    <!-- -----------------------Texto en Negrita---------------------->
    <!-- <b>Texto en negrita</b> -->
    
    
    <!-- -----------------------Texto en Color---------------------->
    <!-- <span style="color: #ff0000;">windows10upgrades@example.com</span> -->
    
    
    
    <!-- -----------------------Espacio entre bloques---------------------->
    <!-- <tr style="background-color: #ffffff"><td><p style="line-height: 40px;">&nbsp;</p></td></tr> -->
    
    </table>
    <!-- end email container -->
    
    
    </td>
    </tr>
    </table>
    
    
    </center>
    
    
    
    
    
    </body>
    </html>
`
},

{
    id: 90,
    name: '90. MFA Tesorería',
    url: `https://html-email-builder.pages.dev/images/previews/prebuilt-90.png`,
    code:
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
    <title>Actualización Office 365</title>

    <!--This piece of code in the head targets all Outlook clients and allows us to force a lower DPI rate inside the code-->
    <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->

    <style type="text/css">
        /* Stop Outlook resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            mso-line-height-rule: exactly;
        }
        
        * {
            margin: 0;
            padding: 0;
            color: #020202;
            box-sizing: border-box;
        }

        html, body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Remove space around the email design. */
        html,
        body {
            width: 100%;
            height: 100%;
        }

        p {
            font-size: 16px;
        }
        
        /* Stop Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Use a better rendering method when resizing images in Outlook IE. */
        img {
            -ms-interpolation-mode: bicubic;
            border: none;
            display: block;
            margin: 0;
        }
        
        /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
        a,
        span {
            text-decoration: none;
            color:#020202;
        }

        .container600 {
            width: 600px;
            margin: 0 auto;
        }

        @media all and (max-width: 599px) {
            .container600 {
                width: 600px;
            }
        }


        .margin-0                       { margin: 0; }

        .padding-smallest               { padding: 5px; }
        .padding-smaller                { padding: 10px; }
        .padding-small                  { padding: 15px; }
        .padding-normal                 { padding: 20px; }
        .padding-big                    { padding: 25px; }
        .padding-bigger                 { padding: 30px; }

        .padding-x-smallest             { padding-left: 5px; padding-right: 5px; }
        .padding-x-smaller              { padding-left: 10px; padding-right: 10px; }
        .padding-x-small                { padding-left: 15px; padding-right: 15px; }
        .padding-x-normal               { padding-left: 20px; padding-right: 20px; }
        .padding-x-big                  { padding-left: 25px; padding-right: 25px; }
        .padding-x-bigger               { padding-left: 30px; padding-right: 30px; }
        
        .bg-color-general               { background-color: #E1E1E1; }
        .bg-color-normal                { background-color: #ffffff; }
        .bg-color-alt0                  { background-color: #e8eaea; }
        .bg-color-alt                   { background-color: #f1f4f4; }
        .bg-color-alt2                  { background-color: #EEEEF8; }
        .bg-color-alt3                  { background-color: #DDDEF4; }
        .bg-color-alt4                  { background-color: #191818; }
        .bg-color-footer                { background-color: #000000; }
        .bg-color-test                  { background-color: #b11818; }
        .bg-color-gris                  { background-color: #f9f9f9; }
        .bg-color-blue1                 { background-color: #1194E3; }
        .bg-color-blue2                 { background-color: #006DB8; }
        .bg-color-blue3                 { background-color: #124FA8; } /* azul onedrive */

        .bg-color-blue4                 { background-color: #5B61DB; }
        .bg-color-blueTeams             { background-color: #4C50C3; }
        .bg-color-blue6                 { background-color: #323884; }

        .bg-color-green1                { background-color: #7F9636; }
        .bg-color-red                   { background-color: #E20714; }

        .bg-color-text-gray             { background-color: #595757; }
        .bg-color-orange                { background-color: #ff7900; }
    </style>


</head>

<body class="bg-color-general" style="margin: 0 auto; padding: 0; min-width: 100%; mso-line-height-rule: exactly;" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">

<center>
    <table width="600" class="container600" style="margin: 0 auto; max-width: 600px;" role="presentation" cellpadding="0" cellspacing="0">
    <tr class="bg-color-general">
    <td width="600" style="text-align: center;">
    
    <!--email container-->
    <table width="600" role="presentation" cellspacing="0" cellpadding="0" align="center" border="0" bgcolor="#ffffff">

        <!-------------------------Header-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 4px 30px 0 30px;" align="center" valign="middle">
        <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td height="80" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="Mail Builder" width="auto" height="53" border="0">
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>

            
            
            
<!-------------------------Imagen-------------------------------->
<tr bgcolor="#e8eaea" align="center">
    <td align="center" valign="middle">
        <img
            src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png"
            alt="portada"
            width="600" height="auto"
            style="display: block;"
        >
    </td>
</tr>

            
            
            
<!-------------------------Border-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 0;" align="center" valign="middle">
        <table
            style="border-bottom: 2px solid #ffffff;"
            width="600"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>
<!-------------------------Titular-------------------------------->
<tr bgcolor="#E20714" align="center">
    <td style="padding: 20px 0px 20px 0px;" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td align="center" valign="middle">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 25px; font-weight: bold; line-height: 30px; color:#FFFFFF; margin: 0; letter-spacing: 1px; text-transform: uppercase;">
                            Más seguridad en tu acceso a SAP S/4
                            <br>
                            Hana Tesorería
                        </p>
                    </td>
                </tr>
            </tbody>
            </table>
    </td>
</tr>
<!-------------------------Imagen-------------------------------->
<!-- <tr bgcolor="#ffffff" align="center">
    <td align="center" valign="middle">
        <img
            src="https://html-email-builder.pages.dev/images/others/other-6.png"
            alt="portada"
            width="600" height="auto"
            style="display: block;"
        >
    </td>
</tr> -->


<!-------------------------Empty Space-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 20px 30px 8px 30px;" align="center" valign="middle">
        <table
            width="100%"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>








<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 5px 20px 35px 20px" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 20px; font-weight: bold; line-height:22px; color:#020202; margin: 0;">
                        A partir del 14 de Mayo, el sistema te pedirá la doble autenticación para entrar a la aplicación SAP S/4 Hana Tesorería.
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>


<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td align="center" valign="middle">
        <img
            src="https://html-email-builder.pages.dev/images/others/divider-transparent.png"
            alt="portada"
            width="600" height="auto"
            style="display: block;"
        >
    </td>
</tr>


<!-------------------------Empty Space-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 18px 30px;" align="center" valign="middle">
        <table
            width="100%"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>




<!-------------------------Imagen-------------------------------->
<tr bgcolor="#F1F4F4" align="center">
    <td align="center" valign="middle">
        <img
            src="https://html-email-builder.pages.dev/images/others/other-5.png"
            alt="portada"
            width="84" height="auto"
            style="display: block;"
        >
    </td>
</tr>


<!-------------------------Texto-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 20px 20px 0px 20px" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 22px; font-weight: bold; line-height: 22px; color:#020202; margin: 0;">
                        ¿Qué significa?
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>


<!-------------------------Texto-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 12px 20px 0px 20px" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 18px; font-weight: normal; line-height: 24px; color:#020202; margin: 0;">
                        Al acceder con tu usuario y contraseña, se te pedirá que verifiques tu identidad con el mismo sistema de autenticación que hayas configurado para tu cuenta de <span style="color: #ff0000">MAIL BUILDER</span> (app Microsoft Authenticator, SMS o llamada). 
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>

<!-------------------------Empty Space-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 18px 30px;" align="center" valign="middle">
        <table
            width="100%"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>

<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td align="center" valign="middle">
        <img
            src="https://html-email-builder.pages.dev/images/others/divider-transparent.png"
            alt="portada"
            width="600" height="auto"
            style="display: block;"
        >
    </td>
</tr>




<!-------------------------Empty Space-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 18px 30px;" align="center" valign="middle">
        <table
            width="100%"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>




<!-------------------------Imagen-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td align="center" valign="middle">
        <img
            src="https://html-email-builder.pages.dev/images/others/other-4.png"
            alt="portada"
            width="62" height="auto"
            style="display: block;"
        >
    </td>
</tr>


<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 15px 20px 0px 20px" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 22px; font-weight: bold; line-height: 22px; color:#020202; margin: 0;">
                        IMPORTANTE
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>


<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 14px 20px 0px 20px" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 18px; font-weight: bold; line-height: 24px; color:#020202; margin: 0;">
                        Esta acción se solicitará siempre, tanto si accedes fuera
                        <br>
                        como dentro de las oficinas de <span style="color: #ff0000">MAIL BUILDER</span>.
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>


<!-------------------------Empty Space-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 18px 30px;" align="center" valign="middle">
        <table
            width="100%"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>




<!-------------------------Footer-------------------------------->
<tr bgcolor="#000000" align="center">
    <td style="padding: 0 30px 4px 30px;" align="center" valign="middle">
        <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td height="80" align="left" valign="middle">
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="40" border="0">
                            <!-- <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="40" border="0"> -->
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>

            
            
        
        
        
    <!-- -----------------------Ruta online mail builder---------------------->
    <!-- https://html-email-builder.pages.dev/images/others/other-5.png -->
    
    
    <!-- -----------------------Ruta local ---------------------->
    <!-- ./img/ -->
    
    
    <!-- -----------------------Link con estilo ---------------------->
    <!-- <a href="mailto:windows10upgrades@example.com">
        <span style="color: #ff0000; font-weight: bold; text-decoration: underline;">windows10upgrades@example.com</span>
    </a> -->
    
    <!-- -----------------------Nueva linea ---------------------->
    <!-- <br> -->
    
    
    <!-- -----------------------Texto en Negrita---------------------->
    <!-- <b>Texto en negrita</b> -->
    
    
    <!-- -----------------------Texto en Color---------------------->
    <!-- <span style="color: #ff0000;">windows10upgrades@example.com</span> -->
    
    
    
    <!-- -----------------------Espacio entre bloques---------------------->
    <!-- <tr style="background-color: #ffffff"><td><p style="line-height: 40px;">&nbsp;</p></td></tr> -->
    
    </table>
    <!-- end email container -->
    
    
    </td>
    </tr>
    </table>
    
    
    </center>
    
    
    
    
    
    </body>
    </html>
`
},

// {
//     id: 4,
//     name: '04. Canales Soporte Australia',
//     url: `https://html-email-builder.pages.dev/images/previews/prebuilt-4.png`,
//     code:
// `

// `
// },


];



export const all_prebuilts_without_code = all_prebuilt_emails
                                            .map(preb => ({ id: preb.id, name: preb.name, url: preb.url }))
                                            .sort(compareObjectsByProperty('id', -1));
