import type { EmailWrapper } from '../types';

export const tableWrapper: EmailWrapper = {
    topWrapper: `
    <table width="600" style="margin: 0 auto;" border="0" cellspacing="0" cellpadding="0" role="presentation"><tbody>
    `.trim(),
    bottomWrapper: `
    </tbody></table>
    `.trim()
}


export const divWrapper: EmailWrapper = {
    topWrapper: `<div>`,
    bottomWrapper: `</div>`
}


export const htmlEmailWrapper: EmailWrapper = {
    topWrapper: `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" charset="utf-8">
        <title>NewEmail</title>
    
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
    `.trim(),
    bottomWrapper: `
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
}