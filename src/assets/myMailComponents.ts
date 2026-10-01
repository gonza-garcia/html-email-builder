import type { ComponentCategory, MailComponent } from '../types';

export const components_categories: ComponentCategory[] = [
  'Banners', // 0
  'Buttons', // 1
  'Single Components', // 2
  'Multi Components', // 3
  'Layouts A', // 4
  'Layouts B', // 5
  'Layouts C', // 6
  'Layouts D', // 7
  'Varios', // 8
];

const banners = [
  `
<!-------------------------Header-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td align="center" valign="middle">
        <table width="600" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr bgcolor="#ffffff">
                    <td height="65" style="padding: 8px 30px 8px 20px;" align="left" valign="middle" >
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="Mail Builder" width="auto" height="50" border="0">
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>
`,
  `
<!-------------------------Header-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td align="center" valign="middle">
        <table width="600" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr bgcolor="#ffffff">
                    <td height="65" style="padding: 8px 30px 8px 20px;" align="left" valign="middle" >
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/headers/header-generic-0.png" alt="Mail Builder" width="auto" height="50" border="0">
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
            style="border-bottom: 4px solid #ff0000;"
            width="600"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>
`,
  `
<!-------------------------Footer Español-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td align="center" valign="middle">
        <table width="600" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr bgcolor="#000000">
                    <td height="65" style="padding: 0px 30px 8px 20px;" align="left" valign="middle" >
                        <a href="https://example.com" target="_blank">
                            <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Mail Builder" width="auto" height="40" border="0">
                            <!-- <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="40" border="0"> -->
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>
`,
  `
<!-------------------------Footer Ingles-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td align="center" valign="middle">
        <table width="600" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr bgcolor="#000000">
                    <td height="65" style="padding: 0px 30px 8px 20px;" align="left" valign="middle" >
                        <a href="https://example.com" target="_blank">
                            <!-- <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Mail Builder" width="auto" height="40" border="0"> -->
                            <img src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png" alt="Logo ServiceNow" width="auto" height="40" border="0">
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>
`,
  `
<!-----------------------------Banner IMage and Title--------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 0 0;" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr align="center">
                <td width="600" bgcolor="#ff0000" align="center" valign="middle">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr valign="top">
                            <td width="80" bgcolor="#ff0000">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                    <tr valign="top">
                                        <td width="60" style="padding: 10px;" bgcolor="#ff0000">
                                            <img src="https://html-email-builder.pages.dev/images/others/other-1.png" alt="Chats" width="60" height="60" style="display: block;">
                                        </td>
                                    </tr>
                                </tbody>
                                </table>
                            </td>
                            <td width="520" bgcolor="#ff0000" valign="middle" style="padding: 0 6px 0 0;">
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 21px; font-weight: normal; line-height: 20px; color:#ffffff; letter-spacing: 2px;">
                                    ESTO ES UN TITULAR
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
`,
  `
<!-------------------------Titular Rojo-------------------------------->
<tr bgcolor="#ff0000" align="center">
    <td style="padding: 20px 0px 20px 0px;" align="center" valign="middle">
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
`,
  `
<!-------------------------Titular Rojo-------------------------------->
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
`,
  `
<!-----------------------------Banner Image and Title--------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 0 0;" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr align="center">
                <td width="600" align="center" valign="middle">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr align="left" valign="middle">
                            <td width="100" style="padding: 10px;" bgcolor="#ffffff">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                    <tr valign="middle">
                                        <td>
                                            <img src="https://html-email-builder.pages.dev/images/others/other-1.png" alt="Chats" width="100" height="100" style="display: block;">
                                        </td>
                                    </tr>
                                </tbody>
                                </table>
                            </td>
                            <td width="500" bgcolor="#ffffff" valign="middle" style="padding: 0 10px;">
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 15px; font-weight: normal;color:#020202; line-height: 22px;">
                                    Solo utilízalo si no funcionan las aplicaciones o experimentas problemas de conexión. De no ser así, accede a las reuniones mediante la aplicación de Teams o Skype.
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
`,
  `
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
                        <img src="https://html-email-builder.pages.dev/images/headers/header-teams-1.png" alt="cover" style="display: block;" width="350" height="80">
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>
`,
  `<!-------------------------Triple Column Banner-------------------------------->
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
</tr>`,
];

const buttons = [
  `
<!-------------------------Primary Button-------------------------------->
<!--  Define width, height and bgcolor in TD attributes. 
TD height and color should be equal to A line-height and color.
Border radius probably won't work but it won't hurt either. -->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 20px 0;" align="center" valign="middle">
        <table style="-webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
        <tbody>
            <tr> 
                <td width="220" height="45" bgcolor="#ff0000" align="center" style="color: #ffffff; border: 3px solid #ff0000; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; text-decoration: none; display: block;">
                    <a href=""
                    style="line-height: 39px; color: #ffffff; background-color: #ff0000; font-size: 15px; font-weight: normal; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width: 100%; display: inline-block; letter-spacing: 2px;" target="_blank">
                        PRIMARY BUTTON
                    </a>
                </td> 
            </tr>
        </tbody>
        </table> 
    </td>
</tr>
`,
  `
<!-------------------------Secondary Button-------------------------------->
<!--  Define width, height and bgcolor in TD attributes. 
TD height and color should be equal to A line-height and color.
Border radius probably won't work but it won't hurt either. -->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 20px 0;" align="center" valign="middle">
        <table style="-webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
        <tbody>
            <tr>
                <td width="220" height="45" align="center" style="color: #ff0000; background-color: #ffffff; border: 3px solid #ff0000; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; display: block; text-decoration: none;">
                    <a href=""
                    style="line-height: 39px; color: #ff0000; background-color: #ffffff; font-size: 16px; font-weight: bold; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width:100%; display: inline-block; letter-spacing: 2px;" target="_blank">
                        SECONDARY BTN
                    </a>
                </td> 
            </tr>
        </tbody>
        </table>
    </td>
</tr>
`,
  `
<!-------------------------Double Button-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 20px 0;" align="center" valign="middle">
        <table style="-webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
        <tbody>
            <tr> 
                <td width="220" height="45" bgcolor="#ff0000" align="center" style="color: #ffffff; border: 3px solid #ff0000; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; text-decoration: none; display: block;">
                    <a href=""
                    style="line-height: 39px; color: #ffffff; background-color: #ff0000; font-size: 15px; font-weight: normal; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width: 100%; display: inline-block; letter-spacing: 2px;" target="_blank">
                        PRIMARY BUTTON
                    </a>
                </td> 
                <td width="90"></td>
                <td width="220" height="45" align="center" style="color: #ff0000; background-color: #ffffff; border: 3px solid #ff0000; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; display: block; text-decoration: none;">
                    <a href=""
                    style="line-height: 39px; color: #ff0000; background-color: #ffffff; font-size: 16px; font-weight: bold; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width:100%; display: inline-block; letter-spacing: 2px;" target="_blank">
                        SECONDARY BTN
                    </a>
                </td> 
            </tr>
        </tbody>
        </table>
    </td>
</tr>
`,
  `
<!-------------------------Primary Button with double background color -------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td align="center" valign="middle">
        <table width="550" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
        <tbody>
            <tr>
                <td width="185" valign="top" style="border-top: 3px solid #ffffff; border-bottom: 3px solid #f1f4f4;">
                    <p style="line-height: 20px; background-color: #ffffff;">&nbsp;</p>
                    <p style="line-height: 20px; background-color: #f1f4f4;">&nbsp;</p>
                </td>
                <td width="220" height="45" bgcolor="#ff0000" align="center" style="color: #ffffff; border: 3px solid #ff0000; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; text-decoration: none; display: block;">
                    <a href=""
                    style="line-height: 39px; color: #ffffff; background-color: #ff0000; font-size: 15px; font-weight: normal; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width: 100%; display: inline-block; letter-spacing: 2px;" target="_blank">
                        PRIMARY BUTTON
                    </a>
                </td> 
                <td width="185" valign="top" style="border-top: 3px solid #ffffff; border-bottom: 3px solid #f1f4f4;">
                    <p style="line-height: 20px; background-color: #ffffff;">&nbsp;</p>
                    <p style="line-height: 20px; background-color: #f1f4f4;">&nbsp;</p>
                </td>
            </tr>
        </tbody>
        </table> 
    </td>
</tr>
`,
  `
<!-------------------------Secondary Button with double background color -------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td align="center" valign="middle">
        <table width="550" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
            <tbody>
                <tr>
                    <td width="185" valign="top" style="border-top: 3px solid #ffffff; border-bottom: 3px solid #f1f4f4;">
                        <p style="line-height: 20px; background-color: #ffffff;">&nbsp;</p>
                        <p style="line-height: 20px; background-color: #f1f4f4;">&nbsp;</p>
                    </td>
                    <td width="220" height="45" align="center" style="color: #ff0000; background-color: #ffffff; border: 3px solid #ff0000; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; display: block; text-decoration: none;">
                        <a href=""
                        style="line-height: 39px; color: #ff0000; background-color: #ffffff; font-size: 16px; font-weight: bold; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width:100%; display: inline-block; letter-spacing: 2px;" target="_blank">
                            SECONDARY BTN
                        </a>
                    </td> 
                    <td width="185" valign="top" style="border-top: 3px solid #ffffff; border-bottom: 3px solid #f1f4f4;">
                        <p style="line-height: 20px; background-color: #ffffff;">&nbsp;</p>
                        <p style="line-height: 20px; background-color: #f1f4f4;">&nbsp;</p>
                    </td>
                </tr>
            </tbody>
        </table> 
    </td>
</tr>
`,
  `
<!-------------------------Double Button with double background color -------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td align="center" valign="middle">
        <table width="550" border="0" cellspacing="0" cellpadding="0" role="presentation"> 
            <tbody>
                <tr>
                    <td width="100" valign="top" style="border-top: 3px solid #ffffff; border-bottom: 3px solid #f1f4f4;">
                        <p style="line-height: 20px; background-color: #ffffff;">&nbsp;</p>
                        <p style="line-height: 20px; background-color: #f1f4f4;">&nbsp;</p>
                    </td>
                    <td width="180" height="45" bgcolor="#ff0000" align="center" style="color: #ffffff; border: 3px solid #ff0000; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; text-decoration: none; display: block;">
                        <a href=""
                        style="line-height: 39px; color: #ffffff; background-color: #ff0000; font-size: 15px; font-weight: normal; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width: 100%; display: inline-block; letter-spacing: 2px;" target="_blank">
                            PRIMARY BUTTON
                        </a>
                    </td> 
                    <td width="90" valign="top" style="border-top: 3px solid #ffffff; border-bottom: 3px solid #f1f4f4;">
                        <p style="line-height: 20px; background-color: #ffffff;">&nbsp;</p>
                        <p style="line-height: 20px; background-color: #f1f4f4;">&nbsp;</p>
                    </td>
                    <td width="180" height="45" align="center" style="color: #ff0000; background-color: #ffffff; border: 3px solid #ff0000; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; display: block; text-decoration: none;">
                        <a href=""
                        style="line-height: 39px; color: #ff0000; background-color: #ffffff; font-size: 16px; font-weight: bold; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width:100%; display: inline-block; letter-spacing: 2px;" target="_blank">
                            SECONDARY
                        </a>
                    </td> 
                    <td width="100" valign="top" style="border-top: 3px solid #ffffff; border-bottom: 3px solid #f1f4f4;">
                        <p style="line-height: 20px; background-color: #ffffff;">&nbsp;</p>
                        <p style="line-height: 20px; background-color: #f1f4f4;">&nbsp;</p>
                    </td>
                </tr>
            </tbody>
        </table> 
    </td>
</tr>
`,
];

const singleComponents = [
  `
<!-------------------------Empty Space-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 15px 30px 15px 30px;" align="center" valign="middle">
        <table
            width="100%"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>
`,
  `
<!-------------------------Border-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 15px 30px 15px 30px;" align="center" valign="middle">
        <table
            style="border-top: 1px solid #999;"
            width="100%"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>
`,
  `
<!-------------------------Imagen-------------------------------->
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
`,
  `
<!-------------------------Titular-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 20px 20px 20px 20px" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td align="center" valign="middle">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 28px; font-weight: normal; line-height: 22px; color:#020202; margin: 0; letter-spacing: 1px;">
                            ESTO ES UN TITULAR
                        </p>
                    </td>
                </tr>
            </tbody>
            </table>
    </td>
</tr>
`,
  `
<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 20px 20px 20px 20px" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; line-height: 22px; color:#020202; margin: 0;">
                        Esto es un texto normal
                        <br>
                        <b>Este texto está en negrita</b>
                        <br>
                        <a href="https://example.com" target="_blank"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">Esto es un Link</span></a>
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>
`,
  `<!-------------------------Texto-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 30px 0 30px 0" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 12px; line-height: 19px; color:#504e4e; margin: 0;">
                        Por favor, no compartas este email.
                        <br>
                        Si tienes problemas de acceso, puedes hacer clic aquí:
                        <br>
                        <a href="https://example.com" target="_blank">
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
</tr>`,
  `
<!-------------------------Texto-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 20px 20px 20px 20px;" align="center" valign="middle">
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
</tr>`,
  `
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
`,
  `
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
`,
];

const multiComponents = [
  `
<!-------------------------Titular y Texto-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 30px 20px 30px 20px" align="center" valign="middle">
        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 28px; font-weight: normal; color:#020202; letter-spacing: 1px;">
            ESTO ES UN TITULAR
        </p>
        <p style="line-height: 15px;">&nbsp;</p>
        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#d61818; line-height: 22px;">
            Esto es un texto normal
            <br>
            <b>Este texto está en negrita</b>
            <br>
            <a href="https://example.com" target="_blank"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">Esto es un Link</span></a>
        </p>
    </td>
</tr>
`,
  `
<!-------------------------Image and text side by side-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 20px 25px 20px 25px;" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr align="center">
                <td width="550" bgcolor="#f1f4f4" align="center" valign="middle">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr align="center" valign="middle">
                            <td width="150">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                    <tr valign="top">
                                        <td width="150" style="padding: 0;">
                                            <img src="https://html-email-builder.pages.dev/images/headers/header-generic-1.png" alt="Chats" width="150" height="150" style="display: block;">
                                        </td>
                                    </tr>
                                </tbody>
                                </table>
                            </td>
                            
                            <td width="0" bgcolor="#f1f4f4"></td>

                            <td width="400" bgcolor="#ffffff" align="left" valign="middle" style="padding: 0 20px;">
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 21px; font-weight: normal; line-height: 20px; color:#020202; letter-spacing: 1px;">
                                    ESTO ES UN TITULAR
                                </p>
                                <p style="line-height: 12px;">&nbsp;</p>
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                                    Esto es un texto normal
                                    <br>
                                    <b>Este texto está en negrita</b>
                                    <br>
                                    <a href="https://example.com" target="_blank"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">Esto es un Link</span></a>
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
`,
  `
<!-------------------------Icons and links-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr valign="middle" align="center">

                    <td width="50" align="right" style="width: 58px;">
                        <img src="https://html-email-builder.pages.dev/images/icons/icon-chat.png" style="display: block;" alt="button" width="50" height="50">
                    </td>

                    <td width="282" valign="middle" align="left" style="padding: 0 10px;" align="center">
                        <span style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: bold; color:#323884;">
                            <a href=""
                            style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: bold; color:#323884; text-decoration: underline; letter-spacing: 1px;" target="_blank">
                                CURSO</a> | 
                            <a href=""
                            style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: bold; color:#323884; text-decoration: underline; letter-spacing: 1px;" target="_blank">
                                VÍDEO</a> | 
                            <a href=""
                            style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: bold; color:#323884; text-decoration: underline; letter-spacing: 1px;" target="_blank">
                                WEBINAR</a> | 
                            <a href=""
                            style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: bold; color:#323884; text-decoration: underline; letter-spacing: 1px;" target="_blank">
                                GUÍAS</a>
                        </span>
                    </td>

                </tr>
            </tbody>
        </table>
    </td>
</tr>
`,
  `
<!-------------------------Icons and links-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr valign="middle" align="center">

                    <td width="50" align="right" style="width: 58px;">
                        <img src="https://html-email-builder.pages.dev/images/icons/icon-info.png" style="display: block;" alt="button" width="50" height="50">
                    </td>

                    <td width="50" valign="middle" align="left" style="padding: 0 10px;" align="center">
                        <span style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: bold; color:#323884;">
                            <a href=""
                            style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: bold; color:#323884; text-decoration: underline; letter-spacing: 1px;" target="_blank">
                                CURSO</a>
                        </span>
                    </td>

                    <td width="50" align="right" style="width: 58px;">
                        <img src="https://html-email-builder.pages.dev/images/others/other-5.png" style="display: block;" alt="button" width="50" height="50">
                    </td>

                    <td width="50" valign="middle" align="left" style="padding: 0 10px;" align="center">
                        <span style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: bold; color:#323884;">
                            <a href=""
                            style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: bold; color:#323884; text-decoration: underline; letter-spacing: 1px;" target="_blank">
                                CURSO</a>
                        </span>
                    </td>

                    <td width="50" align="right" style="width: 58px;">
                        <img src="https://html-email-builder.pages.dev/images/others/other-4.png" style="display: block;" alt="button" width="50" height="50">
                    </td>

                    <td width="50" valign="middle" align="left" style="padding: 0 10px;" align="center">
                        <span style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: bold; color:#323884;">
                            <a href=""
                            style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: bold; color:#323884; text-decoration: underline; letter-spacing: 1px;" target="_blank">
                                CURSO</a>
                        </span>
                    </td>

                </tr>
            </tbody>
        </table>
    </td>
</tr>
`,
  `
<!-------------------------Imagen y título con bordes-------------------------------->
<tr bgcolor="#b11818" align="center">
    <td style="padding: 20px 25px 20px 25px" align="center" valign="middle">
        <table width="540" role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <img
                        src="https://html-email-builder.pages.dev/images/headers/header-generic-1.png"
                        alt="portada"
                        width="550" height="auto"
                        style="display: block;"
                    >
                    <p style="line-height: 18px;">&nbsp;</p>
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 28px; font-weight: bold; color:#ffffff;">
                        ¡Tu opinión nos importa!
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>
`,
  `
<!-------------------------Box with image, three mini boxes and one button-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td width="550" align="center" valign="middle">
        <img
            src="https://html-email-builder.pages.dev/images/others/other-2.png" alt="portada"
            width="550" height="auto"
            style="display: block;"
        >
    </td>
</tr>
<tr bgcolor="#f1f4f4" align="center">
    <td align="center" valign="middle">
        <table width="550" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr align="center" valign="top" bgcolor="#ffffff">
                    <td width="50">&nbsp;</td>
                    <td width="150">
                        <p style="line-height: 20px;">&nbsp;</p>
                        <img src="https://html-email-builder.pages.dev/images/others/other-1.png" alt="Icono autenticacion" height="38" width="38">
                        <p style="line-height: 12px;">&nbsp;</p>
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 24px;">
                            ¿Cuándo?
                        </p>
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size:16px; font-weight: bolder; color:#020202; line-height: 22px;"
                        >
                            11/10
                        </p>
                    </td>
                    <td width="150">
                        <p style="line-height: 20px;">&nbsp;</p>
                        <img src="https://html-email-builder.pages.dev/images/others/other-1.png" alt="Icono autenticacion" height="38" width="38">
                        <p style="line-height: 12px;">&nbsp;</p>
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size:16px; font-weight: normal; color:#020202; line-height: 24px;">
                            ¿Dónde?
                        </p>
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size:16px; font-weight: bolder; color:#020202; line-height: 22px;"
                        >
                            Live Events
                        </p>
                    </td>
                    <td width="150">
                        <p style="line-height: 20px;">&nbsp;</p>
                        <img src="https://html-email-builder.pages.dev/images/others/other-1.png" alt="Icono autenticacion" height="38" width="38">
                        <p style="line-height: 12px;">&nbsp;</p>
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size:16px; font-weight: normal; color:#020202; line-height: 24px;">
                            ¿Horario?
                        </p>
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size:16px; font-weight: bolder; color:#020202; line-height: 22px;"
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
<!-------------------------Texto 1-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td bgcolor="#f1f4f4" style="padding: 0 25px 0 25px;" align="center" valign="middle">
        <table width="550" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr valign="top" align="center">
                    <td bgcolor="#ffffff" valign="top">
                        <p style="line-height: 20px;">&nbsp;</p>
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 26px;">
                            Recuerda tener a mano tus preguntas y desconectarte de la VPN para evitar problemas de conexión.
                        </p>
                        <p style="line-height: 28px;">&nbsp;</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>
<!-------------------------Button-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
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
                    style="line-height: 34px; color: #ffffff; background-color: #ff0000; font-size: 16px; font-weight: bold; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width: 100%; display:inline-block" target="_blank">
                        Sumate al Webinar
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
`,
  `
<!-------------------------Double Column Icons and text-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td valign="middle">
        <table bgcolor="#ffffff"
            width="550"
            role="presentation" cellspacing="0" cellpadding="0">
            <tr><td><p style="line-height: 22px;">&nbsp;</p></td></tr>
        </table>
        <table bgcolor="#ffffff" width="550" role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr bgcolor="#ffffff" valign="middle" align="left">
                    <td width="40">&nbsp;</td>
                    <td width="26">
                        <img src="https://html-email-builder.pages.dev/images/icons/icon-info.png" style="display: block;" alt="button" width="26" height="26">
                    </td>
                    <td width="14">&nbsp;</td>
                    <td width="390">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 16px;">
                            Qué es Documentum D2, para qué se utiliza y formas de acceso.
                        </p>
                    </td>
                    <td width="40">&nbsp;</td>
                </tr>
                <tr><td><p style="line-height: 22px;">&nbsp;</p></td></tr>
                <tr bgcolor="#ffffff" valign="middle" align="left">
                    <td width="40">&nbsp;</td>
                    <td width="26">
                        <img src="https://html-email-builder.pages.dev/images/icons/icon-info.png" style="display: block;" alt="button" width="26" height="26">
                    </td>
                    <td width="14">&nbsp;</td>
                    <td width="390">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 16px;">
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
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 16px;">
                            Cómo realizar búsquedas por filtros y generar reportes
                        </p>
                    </td>
                    <td width="40">&nbsp;</td>
                </tr>
                <tr bgcolor="#ffffff"><td><p style="line-height: 22px;">&nbsp;</p></td></tr>
            </tbody>
        </table>
    </td>
</tr>
`,
  `
<!-------------------------Pill 1--------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td bgcolor="#f1f4f4" style="padding: 25px 25px 25px 25px;" align="center" valign="middle">
        <img
            src="https://html-email-builder.pages.dev/images/others/other-2.png" alt="portada"
            width="550" height="auto"
            style="display: block;"
        >
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr valign="top" align="center">
                    <td width="550" bgcolor="#ffffff" style="padding: 0 25px 25px 25px;" valign="top">
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 22px; font-weight: bold; color:#020202; line-height: 22px;">
                            Actualiza tu ordenador
                            <br>
                            <br>
                        </p>
                        <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                            Esto es un texto normal
                            <br>
                            <b>Este texto está en negrita</b>
                            <br>
                            <a href="https://example.com" target="_blank"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">Esto es un Link</span></a>
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>
`,
  `
<!-------------------------50% table with image and text-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr valign="top" align="center">
                <td width="297" bgcolor="#5B61DB" valign="top">
                    <img src="https://html-email-builder.pages.dev/images/headers/header-generic-1.png" 
                        alt="improved" style="display: block;"
                        width="297" height="170"
                    >
                    <p style="line-height: 16px;">&nbsp;</p>
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#ffffff; line-height: 16px;">
                        Improved video calls
                    </p>
                    <p style="line-height: 16px;">&nbsp;</p>
                </td>
                <td width="6">

                </td>
                <td width="297" bgcolor="#5B61DB" valign="top">
                    <img src="https://html-email-builder.pages.dev/images/headers/header-generic-1.png"
                        alt="files" style="display: block;"
                        width="297" height="170"
                    >
                    <p style="line-height: 16px;">&nbsp;</p>
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#ffffff; line-height: 16px;">
                        Bring files, chats and apps together
                    </p>
                    <p style="line-height: 16px;">&nbsp;</p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>
`,
  `<!-------------------------Teams English-------------------------------->
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
</tr>`,
  `<!-------------------------Teams English-------------------------------->
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
                        THE EVOLUTION OF COLLABORATIVE WORK
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>`,
  `<!-------------------------Imagen-------------------------------->
<tr bgcolor="#e8eaea" align="center">
    <td align="center" valign="middle">
        <img
            src="https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png"
            alt="portada"
            width="600" height="auto"
            style="display: block;"
        >
    </td>
</tr>`,
  `<!-------------------------Triple Image, Triple Text WITHOUT SPACES and PADDING-------------------------------->
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
                                style="line-height: 39px; color: #ff0000; background-color: #e8eaea; font-size: 15px; font-weight: bold; font-family: Helvetica, Arial, sans-serif; text-decoration: none; width:100%; display:inline-block; letter-spacing: 2px" target="_blank">
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
</tr>`,
  `<!-------------------------Triple Image, Triple Text WITHOUT SPACES and PADDING-------------------------------->
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
</tr>`,
];

const layouts_A = [
  `
<!-------------------------Single Image and text WITHOUT PADDING-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 0 0 0 0;" align="center" valign="middle">
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
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                        Esto es un texto normal
                        <br>
                        <b>Este texto está en negrita</b>
                        <br>
                        <a href="https://example.com" target="_blank"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">Esto es un Link</span></a>
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>
`,
  `
<!-------------------------Double Image, Double Text WITHOUT SPACES and PADDING-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 0 0 0 0;" align="center" valign="middle">
<table role="presentation" cellspacing="0" cellpadding="0" border="0">
<tbody>
    <tr valign="top" align="center">
        <td width="300" bgcolor="#ffffff" valign="top" style="padding: 20px 30px;">
            <img
                src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
                alt="portada"
                width="70" height="auto"
                style="display: block;"
            >
            <p style="line-height: 12px;">&nbsp;</p>
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                Esto es un texto normal
                <br>
                <b>Este texto está en negrita</b>
                <br>
                <a href="https://example.com" target="_blank"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">Esto es un Link</span></a>
            </p>
        </td>
        <td width="300" bgcolor="#ffffff" valign="top" style="padding: 20px 30px;">
            <img
                src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
                alt="portada"
                width="70" height="auto"
                style="display: block;"
            >
            <p style="line-height: 12px;">&nbsp;</p>
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                Esto es un texto normal
                <br>
                <b>Este texto está en negrita</b>
                <br>
                <a href="https://example.com" target="_blank"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">Esto es un Link</span></a>
            </p>
        </td>
    </tr>
</tbody>
</table>
</td>
</tr>
`,
  `
<!-------------------------Triple Image, Triple Text WITHOUT SPACES and PADDING-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
<td style="padding: 0 0 0 0;" align="center" valign="middle">
<table role="presentation" cellspacing="0" cellpadding="0" border="0">
<tbody>
    <tr valign="top" align="center">
        <td width="200" bgcolor="#ffffff" valign="top" style="padding: 20px 15px 20px 15px;">
            <img
                src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
                alt="portada"
                width="70" height="auto"
                style="display: block;"
            >
            <p style="line-height: 12px;">&nbsp;</p>
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                Esto es un texto normal
                <br>
                <b>Este texto está en negrita</b>
                <br>
                <a href="https://example.com" target="_blank"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">Esto es un Link</span></a>
            </p>
        </td>
        <td width="200" bgcolor="#ffffff" valign="top" style="padding: 20px 15px 20px 15px;">
            <img
                src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
                alt="portada"
                width="70" height="auto"
                style="display: block;"
            >
            <p style="line-height: 12px;">&nbsp;</p>
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                Esto es un texto normal
                <br>
                <b>Este texto está en negrita</b>
                <br>
                <a href="https://example.com" target="_blank"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">Esto es un Link</span></a>
            </p>
        </td>
        <td width="200" bgcolor="#ffffff" valign="top" style="padding: 20px 15px 20px 15px;">
            <img
                src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
                alt="portada"
                width="70" height="auto"
                style="display: block;"
            >
            <p style="line-height: 12px;">&nbsp;</p>
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                Esto es un texto normal
                <br>
                <b>Este texto está en negrita</b>
                <br>
                <a href="https://example.com" target="_blank"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">Esto es un Link</span></a>
            </p>
        </td>
    </tr>
</tbody>
</table>
</td>
</tr>
`,
  `
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
                width="70" height="auto"
                style="display: block;"
            >
            <p style="line-height: 12px;">&nbsp;</p>
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                Esto es un texto normal
                <br>
                <b>Este texto está en negrita</b>
                <br>
                <a href="https://example.com" target="_blank"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">Esto es un Link</span></a>
            </p>
        </td>
        <td width="150" bgcolor="#ffffff" valign="top" style="padding: 20px 10px 20px 10px;">
            <img
                src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
                alt="portada"
                width="70" height="auto"
                style="display: block;"
            >
            <p style="line-height: 12px;">&nbsp;</p>
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                Esto es un texto normal
                <br>
                <b>Este texto está en negrita</b>
                <br>
                <a href="https://example.com" target="_blank"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">Esto es un Link</span></a>
            </p>
        </td>
        <td width="150" bgcolor="#ffffff" valign="top" style="padding: 20px 10px 20px 10px;">
            <img
                src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
                alt="portada"
                width="70" height="auto"
                style="display: block;"
            >
            <p style="line-height: 12px;">&nbsp;</p>
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                Esto es un texto normal
                <br>
                <b>Este texto está en negrita</b>
                <br>
                <a href="https://example.com" target="_blank"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">Esto es un Link</span></a>
            </p>
        </td>
        <td width="150" bgcolor="#ffffff" valign="top" style="padding: 20px 10px 20px 10px;">
            <img
                src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
                alt="portada"
                width="70" height="auto"
                style="display: block;"
            >
            <p style="line-height: 12px;">&nbsp;</p>
            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                Esto es un texto normal
                <br>
                <b>Este texto está en negrita</b>
                <br>
                <a href="https://example.com" target="_blank"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">Esto es un Link</span></a>
            </p>
        </td>
    </tr>
</tbody>
</table>
</td>
</tr>
`,
];

const layouts_B = [
  `
<!-------------------------Single Image and text WITH SPACES-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 25px 20px 25px 20px;" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr valign="top" align="center">
                <td width="560" bgcolor="#ffffff" valign="top" style="padding: 20px;">
                    <img
                        src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
                        alt="portada"
                        width="70" height="auto"
                        style="display: block;"
                    >
                    <p style="line-height: 12px;">&nbsp;</p>
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                        Esto es un texto normal
                        <br>
                        <b>Este texto está en negrita</b>
                        <br>
                        <a href="https://example.com" target="_blank"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">Esto es un Link</span></a>
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>
`,
  `
<!-------------------------Double Image, Double Text WITH SPACES-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 25px 20px 25px 20px;" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr valign="top" align="center">
                <td width="275" bgcolor="#ffffff" valign="top" style="padding: 20px;">
                    <img
                        src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
                        alt="portada"
                        width="70" height="auto"
                        style="display: block;"
                    >
                    <p style="line-height: 12px;">&nbsp;</p>
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                        Esto es un texto normal
                        <br>
                        <b>Este texto está en negrita</b>
                        <br>
                        <a href="https://example.com" target="_blank"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">Esto es un Link</span></a>
                    </p>
                </td>
                <td width="20"></td>
                <td width="275" bgcolor="#ffffff" valign="top" style="padding: 20px;">
                    <img
                        src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
                        alt="portada"
                        width="70" height="auto"
                        style="display: block;"
                    >
                    <p style="line-height: 12px;">&nbsp;</p>
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                        Esto es un texto normal
                        <br>
                        <b>Este texto está en negrita</b>
                        <br>
                        <a href="https://example.com" target="_blank"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">Esto es un Link</span></a>
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>
`,
  `
<!-------------------------Triple Image, Triple Text WITH SPACES-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 25px 20px 25px 20px;" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr valign="top" align="center">
                <td width="175" bgcolor="#ffffff" valign="top" style="padding: 20px 15px 20px 15px;">
                    <img
                        src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
                        alt="portada"
                        width="70" height="auto"
                        style="display: block;"
                    >
                    <p style="line-height: 12px;">&nbsp;</p>
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                        Esto es un texto normal
                        <br>
                        <b>Este texto está en negrita</b>
                        <br>
                        <a href="https://example.com" target="_blank"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">Esto es un Link</span></a>
                    </p>
                </td>
                <td width="17"></td>
                <td width="176" bgcolor="#ffffff" valign="top" style="padding: 20px 15px 20px 15px;">
                    <img
                        src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
                        alt="portada"
                        width="70" height="auto"
                        style="display: block;"
                    >
                    <p style="line-height: 12px;">&nbsp;</p>
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                        Esto es un texto normal
                        <br>
                        <b>Este texto está en negrita</b>
                        <br>
                        <a href="https://example.com" target="_blank"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">Esto es un Link</span></a>
                    </p>
                </td>
                <td width="17"></td>
                <td width="175" bgcolor="#ffffff" valign="top" style="padding: 20px 15px 20px 15px;">
                    <img
                        src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
                        alt="portada"
                        width="70" height="auto"
                        style="display: block;"
                    >
                    <p style="line-height: 12px;">&nbsp;</p>
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                        Esto es un texto normal
                        <br>
                        <b>Este texto está en negrita</b>
                        <br>
                        <a href="https://example.com" target="_blank"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">Esto es un Link</span></a>
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>
`,
  `
<!-------------------------Cuadruple Image, Cuadruple Text WITH SPACES-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 25px 20px 25px 20px;" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr valign="top" align="center">
                <td width="128" bgcolor="#ffffff" valign="top" style="padding: 20px 10px 20px 10px;">
                    <img
                        src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
                        alt="portada"
                        width="70" height="auto"
                        style="display: block;"
                    >
                    <p style="line-height: 12px;">&nbsp;</p>
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                        Esto es un texto normal
                        <br>
                        <b>Este texto está en negrita</b>
                        <br>
                        <a href="https://example.com" target="_blank"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">Esto es un Link</span></a>
                    </p>
                </td>
                <td width="19"></td>
                <td width="128" bgcolor="#ffffff" valign="top" style="padding: 20px 10px 20px 10px;">
                    <img
                        src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
                        alt="portada"
                        width="70" height="auto"
                        style="display: block;"
                    >
                    <p style="line-height: 12px;">&nbsp;</p>
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                        Esto es un texto normal
                        <br>
                        <b>Este texto está en negrita</b>
                        <br>
                        <a href="https://example.com" target="_blank"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">Esto es un Link</span></a>
                    </p>
                </td>
                <td width="20"></td>
                <td width="128" bgcolor="#ffffff" valign="top" style="padding: 20px 10px 20px 10px;">
                    <img
                        src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
                        alt="portada"
                        width="70" height="auto"
                        style="display: block;"
                    >
                    <p style="line-height: 12px;">&nbsp;</p>
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                        Esto es un texto normal
                        <br>
                        <b>Este texto está en negrita</b>
                        <br>
                        <a href="https://example.com" target="_blank"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">Esto es un Link</span></a>
                    </p>
                </td>
                <td width="19"></td>
                <td width="128" bgcolor="#ffffff" valign="top" style="padding: 20px 10px 20px 10px;">
                    <img
                        src="https://html-email-builder.pages.dev/images/icons/icon-info.png"
                        alt="portada"
                        width="70" height="auto"
                        style="display: block;"
                    >
                    <p style="line-height: 12px;">&nbsp;</p>
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                        Esto es un texto normal
                        <br>
                        <b>Este texto está en negrita</b>
                        <br>
                        <a href="https://example.com" target="_blank"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">Esto es un Link</span></a>
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>
`,
];

const layouts_C = [
  `
<!-----------------------------Single Box with icon and title--------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 20px 20px 20px 20px;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr align="center">
            <td width="560" bgcolor="#000000" align="center" valign="middle">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tbody>
                    <tr valign="top">
                        <td width="60" bgcolor="#ff0000">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                                <tr valign="top">
                                    <td width="50" style="padding: 5px;" bgcolor="#ff0000">
                                        <img src="https://html-email-builder.pages.dev/images/others/other-1.png" alt="Chats" width="50" height="50" style="display: block;">
                                    </td>
                                </tr>
                            </tbody>
                            </table>
                        </td>
                        <td width="500" bgcolor="#ff0000" valign="middle" style="padding: 0 6px 0 0;">
                            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 21px; font-weight: normal; line-height: 20px; color:#ffffff;">
                                ESTO ES UN TITULAR
                            </p>
                        </td>
                    </tr>
                </tbody>
                </table>
                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tbody>
                    <tr bgcolor="#f1f4f4" valign="top">
                        <td width="560" style="padding: 20px 20px">
                            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                                Esto es un texto normal
                                <br>
                                <b>Este texto está en negrita</b>
                                <br>
                                <a href="https://example.com" target="_blank"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">Esto es un Link</span></a>
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
`,
  `
<!-----------------------------Double Box with icon and title--------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 20px 20px 20px 20px;" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr valign="top" align="center">
                <td width="200" bgcolor="#000000" align="center" valign="middle">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr valign="top">
                            <td width="60" bgcolor="#ff0000">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                    <tr valign="top">
                                        <td width="50" style="padding: 5px;" bgcolor="#ff0000">
                                            <img src="https://html-email-builder.pages.dev/images/others/other-1.png" alt="Chats" width="50" height="50" style="display: block;">
                                        </td>
                                    </tr>
                                </tbody>
                                </table>
                            </td>
                            <td width="140" bgcolor="#ff0000" valign="middle" style="padding: 0 6px 0 0;">
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 21px; font-weight: normal; line-height: 20px; color:#ffffff;">
                                    ESTO ES UN TITULAR
                                </p>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr bgcolor="#f1f4f4" valign="top">
                            <td width="200" style="padding: 20px 20px">
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                                    Esto es un texto normal
                                    <br>
                                    <b>Este texto está en negrita</b>
                                    <br>
                                    <a href="https://example.com" target="_blank"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">Esto es un Link</span></a>
                                </p>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </td>

                <td width="80"></td>

                <td width="200" bgcolor="#000000" align="center" valign="middle">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr valign="top">
                            <td width="60" bgcolor="#ff0000">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                    <tr valign="top">
                                        <td width="50" style="padding: 5px;" bgcolor="#ff0000">
                                            <img src="https://html-email-builder.pages.dev/images/others/other-1.png" alt="Chats" width="50" height="50" style="display: block;">
                                        </td>
                                    </tr>
                                </tbody>
                                </table>
                            </td>
                            <td width="140" bgcolor="#ff0000" valign="middle" style="padding: 0 6px 0 0;">
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 21px; font-weight: normal; line-height: 20px; color:#ffffff;">
                                    ESTO ES UN TITULAR
                                </p>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr bgcolor="#f1f4f4" valign="top">
                            <td width="200" style="padding: 20px 20px">
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                                    Esto es un texto normal
                                    <br>
                                    <b>Este texto está en negrita</b>
                                    <br>
                                    <a href="https://example.com" target="_blank"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">Esto es un Link</span></a>
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
`,
  `
<!-----------------------------Triple Box with icon and title--------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 25px 0 25px 0;" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr valign="top" align="center">
                <td width="175" bgcolor="#ffffff" valign="top">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr valign="top">
                            <td width="60" bgcolor="#ff0000">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                    <tr valign="top">
                                        <td width="50" style="padding: 5px;" bgcolor="#ff0000">
                                            <img src="https://html-email-builder.pages.dev/images/others/other-1.png" alt="Chats" width="50" height="50" style="display: block;">
                                        </td>
                                    </tr>
                                </tbody>
                                </table>
                            </td>
                            <td width="115" bgcolor="#ff0000" valign="middle" style="padding: 0 6px 0 0;" bgcolor="#ff0000">
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 21px; font-weight: normal; line-height: 20px; color:#ffffff;">
                                    ESTO ES UN TITULAR
                                </p>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr bgcolor="#f1f4f4" valign="top">
                            <td width="175" style="padding: 20px 20px 20px 20px">
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                                    Esto es un texto normal
                                    <br>
                                    <b>Este texto está en negrita</b>
                                    <br>
                                    <a href="https://example.com" target="_blank"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">Esto es un Link</span></a>
                                </p>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </td>
                <td width="17"></td>
                <td width="176" bgcolor="#ffffff" valign="top">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr valign="top">
                            <td width="60" bgcolor="#ff0000">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                    <tr valign="top">
                                        <td width="50" style="padding: 5px;" bgcolor="#ff0000">
                                            <img src="https://html-email-builder.pages.dev/images/others/other-1.png" alt="Chats" width="50" height="50" style="display: block;">
                                        </td>
                                    </tr>
                                </tbody>
                                </table>
                            </td>
                            <td width="116" bgcolor="#ff0000" valign="middle" style="padding: 0 6px 0 0;" bgcolor="#ff0000">
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 21px; font-weight: normal; line-height: 20px; color:#ffffff;">
                                    ESTO ES UN TITULAR
                                </p>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr bgcolor="#f1f4f4" valign="top">
                                <td width="176" style="padding: 20px 20px 20px 20px">
                                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                                        Esto es un texto normal
                                        <br>
                                        <b>Este texto está en negrita</b>
                                        <br>
                                        <a href="https://example.com" target="_blank"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">Esto es un Link</span></a>
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td width="17"></td>
                <td width="175" bgcolor="#ffffff" valign="top">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr valign="top">
                            <td width="60" bgcolor="#ff0000">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                    <tr valign="top">
                                        <td width="50" style="padding: 5px;" bgcolor="#ff0000">
                                            <img src="https://html-email-builder.pages.dev/images/others/other-1.png" alt="Chats" width="50" height="50" style="display: block;">
                                        </td>
                                    </tr>
                                </tbody>
                                </table>
                            </td>
                            <td width="115" bgcolor="#ff0000" valign="middle" style="padding: 0 6px 0 0;" bgcolor="#ff0000">
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 21px; font-weight: normal; line-height: 20px; color:#ffffff;">
                                    ESTO ES UN TITULAR
                                </p>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr bgcolor="#f1f4f4" valign="top">
                                <td width="175" style="padding: 20px 20px">
                                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                                        Esto es un texto normal
                                        <br>
                                        <b>Este texto está en negrita</b>
                                        <br>
                                        <a href="https://example.com" target="_blank"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">Esto es un Link</span></a>
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
`,
  `
<!-----------------------------Cuadruple Box with icon and title--------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 20px 20px 20px 20px;" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr valign="top" align="center">
                <td width="128" bgcolor="#ffffff" valign="top">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr valign="top">
                            <td width="50" bgcolor="#ff0000">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                    <tr valign="top">
                                        <td width="50" style="padding: 5px;" bgcolor="#ff0000">
                                            <img src="https://html-email-builder.pages.dev/images/others/other-1.png" alt="Chats" width="50" height="50" style="display: block;">
                                        </td>
                                    </tr>
                                </tbody>
                                </table>
                            </td>
                            <td width="78" bgcolor="#ff0000" valign="middle" style="padding: 0 3px 0 0;">
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 19px; font-weight: normal; line-height: 19px; color:#ffffff;">
                                    TITULAR TITULAR
                                </p>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr bgcolor="#f1f4f4" valign="top">
                                <td width="128" style="padding: 15px 10px">
                                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                                        Esto es un texto normal
                                        <br>
                                        <b>Este texto está en negrita</b>
                                        <br>
                                        <a href="https://example.com" target="_blank"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">Esto es un Link</span></a>
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td width="19"></td>
                <td width="128" bgcolor="#ffffff" valign="top">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr valign="top">
                            <td width="50" bgcolor="#ff0000">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                    <tr valign="top">
                                        <td width="50" style="padding: 5px;" bgcolor="#ff0000">
                                            <img src="https://html-email-builder.pages.dev/images/others/other-1.png" alt="Chats" width="50" height="50" style="display: block;">
                                        </td>
                                    </tr>
                                </tbody>
                                </table>
                            </td>
                            <td width="78" bgcolor="#ff0000" valign="middle" style="padding: 0 3px 0 0;">
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 19px; font-weight: normal; line-height: 19px; color:#ffffff;">
                                    TITULAR TITULAR
                                </p>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr bgcolor="#f1f4f4" valign="top">
                                <td width="128" style="padding: 15px 10px">
                                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                                        Esto es un texto normal
                                        <br>
                                        <b>Este texto está en negrita</b>
                                        <br>
                                        <a href="https://example.com" target="_blank"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">Esto es un Link</span></a>
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td width="20"></td>
                <td width="128" bgcolor="#ffffff" valign="top">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr valign="top">
                            <td width="50" bgcolor="#ff0000">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                    <tr valign="top">
                                        <td width="50" style="padding: 5px;" bgcolor="#ff0000">
                                            <img src="https://html-email-builder.pages.dev/images/others/other-1.png" alt="Chats" width="50" height="50" style="display: block;">
                                        </td>
                                    </tr>
                                </tbody>
                                </table>
                            </td>
                            <td width="78" bgcolor="#ff0000" valign="middle" style="padding: 0 3px 0 0;">
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 19px; font-weight: normal; line-height: 19px; color:#ffffff;">
                                    TITULAR TITULAR
                                </p>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr bgcolor="#f1f4f4" valign="top">
                                <td width="128" style="padding: 15px 10px">
                                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                                        Esto es un texto normal
                                        <br>
                                        <b>Este texto está en negrita</b>
                                        <br>
                                        <a href="https://example.com" target="_blank"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">Esto es un Link</span></a>
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td width="19"></td>
                <td width="128" bgcolor="#ffffff" valign="top">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr valign="top">
                            <td width="50" bgcolor="#ff0000">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                    <tr valign="top">
                                        <td width="50" style="padding: 5px;" bgcolor="#ff0000">
                                            <img src="https://html-email-builder.pages.dev/images/others/other-1.png" alt="Chats" width="50" height="50" style="display: block;">
                                        </td>
                                    </tr>
                                </tbody>
                                </table>
                            </td>
                            <td width="78" bgcolor="#ff0000" valign="middle" style="padding: 0 3px 0 0;">
                                <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 19px; font-weight: normal; line-height: 19px; color:#ffffff;">
                                    TITULAR TITULAR
                                </p>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr bgcolor="#f1f4f4" valign="top">
                                <td width="128" style="padding: 15px 10px">
                                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 16px; font-weight: normal; color:#020202; line-height: 22px;">
                                        Esto es un texto normal
                                        <br>
                                        <b>Este texto está en negrita</b>
                                        <br>
                                        <a href="https://example.com" target="_blank"><span style="color: #ff0000; font-weight: bold; text-decoration: none;">Esto es un Link</span></a>
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
`,
];

const layouts_D = [
  `
<!-------------------------Triple Image, Triple Text WITH SPACES-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 0;" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr valign="top" align="center">
                <td width="197" bgcolor="#f1f4f4" valign="top" style="padding: 20px 15px 20px 15px;">
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
                <td width="198" bgcolor="#f1f4f4" valign="top" style="padding: 20px 15px 20px 15px;">
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
                <td width="197" bgcolor="#f1f4f4" valign="top" style="padding: 20px 15px 20px 15px;">
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
`,
  `
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
`,
  `
<!-------------------------Double Image, Double Text WITH SPACES-------------------------------->
<tr bgcolor="#f1f4f4" align="center">
    <td style="padding: 25px 20px 25px 20px;" align="center" valign="middle">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tbody>
            <tr valign="top" align="center">
                <td width="275" bgcolor="#ffffff" valign="top" style="padding: 20px;">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 20px; font-weight: bold; line-height: 22px; color:#020202; margin: 0;">
                        <a href="" target="_blank">
                            <span style="font-weight: bold;">Miércoles 23 de junio | 16 h
                            </span>
                        </a>
                    </p>
                </td>
                <td width="4"></td>
                <td width="275" bgcolor="#ffffff" valign="top" style="padding: 20px;">
                    <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 20px; font-weight: bold; line-height: 22px; color:#020202; margin: 0;">
                        <a href="" target="_blank">
                            <span style="font-weight: bold;">Jueves 24 de junio | 12 h
                            </span>
                        </a>
                    </p>
                </td>
            </tr>
        </tbody>
        </table>
    </td>
</tr>
`,
  `
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
`,
  `
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
`,
];

const varios = [
  `
<!-----------------------------Single Box with icon and title--------------------------------->
<tr bgcolor="#ffffff" align="center">
<td style="padding: 20px 20px 0px 20px;" align="center" valign="middle">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr align="center">
            <td width="560" bgcolor="#000000" align="center" valign="middle">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tbody>
                    <tr valign="middle">
                        <td width="60" bgcolor="#2D2B2B" valign="middle" align="center">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                                <tr valign="middle">
                                    <td height="60" style="padding: 0px;" bgcolor="#2D2B2B" align="center">
                                        <img src="https://html-email-builder.pages.dev/images/others/other-1.png" alt="Chats" width="60" height="60" style="display: block;">
                                    </td>
                                </tr>
                            </tbody>
                            </table>
                        </td>
                        <td width="500" bgcolor="#ff0000" valign="middle" style="padding: 0 6px 0 10px;">
                            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 18px; font-weight: normal; line-height: 20px; color:#ffffff;">
                                ¿CÓMO ACCEDER POR PRIMERA VEZ AL ENTORNO DE MAIL BUILDER?
                        </td>
                    </tr>
                </tbody>
                </table>
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="border-bottom: 2px solid #dadada; border-left: 2px solid #dadada; border-right: 2px solid #dadada;">
                <tbody>
                    <tr bgcolor="#ffffff" valign="top">
                        <td width="560" style="padding: 20px 20px">
                            <p style="font-family: Calibri, Helvetica, 'Helvetica neue', Arial, Sans-serif; font-size: 14px; font-weight: normal; color:#020202; line-height: 20px;">
                                <span style="color: #ff0000; font-weight: bold; text-decoration: none;">1.</span> Accede a tu ordenador con tu usuario y contraseña.
                                <br>
                                <br>
                                <span style="color: #ff0000; font-weight: bold; text-decoration: none;">2.</span> Crea una nueva contraseña.
                                <br>
                                <br>
                                <span style="color: #ff0000; font-weight: bold; text-decoration: none;">3.</span> Para garantizar la seguridad de tu cuenta y documentos, deberás configurar un método de doble autenticación y para eso, elegir entre tres opciones: aplicación móvil de Microsoft, SMS o llamada telefónica.
                                <br>
                                <br>
                                De ahí en adelante, cada vez que quieras ingresar, solo tendrás que confirmar tu identidad utilizando el método elegido.
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
`,
  `
<!-------------------------Empty Space-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 10px 30px 15px 30px;" align="center" valign="middle">
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
<!-------------------------Empty Space-------------------------------->
<tr bgcolor="#ffffff" align="center">
    <td style="padding: 10px 30px 15px 30px;" align="center" valign="middle">
        <table
            width="100%"
            role="presentation" cellspacing="0" cellpadding="0">
        </table>
    </td>
</tr>
`,
  `
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
`,
  `
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
`,
];

export const originalComponents: MailComponent[] = banners
  .map((component, index) => ({
    id: `${components_categories[0]}_${index}`,
    category: components_categories[0],
    stringCode: component,
  }))
  .concat(
    buttons.map((component, index) => ({
      id: `${components_categories[1]}_${index}`,
      category: components_categories[1],
      stringCode: component,
    })),
    singleComponents.map((component, index) => ({
      id: `${components_categories[2]}_${index}`,
      category: components_categories[2],
      stringCode: component,
    })),
    multiComponents.map((component, index) => ({
      id: `${components_categories[3]}_${index}`,
      category: components_categories[3],
      stringCode: component,
    })),
    layouts_A.map((component, index) => ({
      id: `${components_categories[4]}_${index}`,
      category: components_categories[4],
      stringCode: component,
    })),
    layouts_B.map((component, index) => ({
      id: `${components_categories[5]}_${index}`,
      category: components_categories[5],
      stringCode: component,
    })),
    layouts_C.map((component, index) => ({
      id: `${components_categories[6]}_${index}`,
      category: components_categories[6],
      stringCode: component,
    })),
    layouts_D.map((component, index) => ({
      id: `${components_categories[7]}_${index}`,
      category: components_categories[7],
      stringCode: component,
    })),
    varios.map((component, index) => ({
      id: `${components_categories[8]}_${index}`,
      category: components_categories[8],
      stringCode: component,
    })),
  );
