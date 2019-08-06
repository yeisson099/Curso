'use strict'
var num1= parseInt(prompt('ingrese un numero',' '));

for(var i=0; i<=num1; i++){
    if(num1%i == 0){
        document.write('<h2>el numero '+i+' es divisor de '+num1+'</h2>');
    }
}

import { browser, by, Browser, element } from 'protractor';
import { WoFrontendPage, usuario, contrasena } from '../../app.po';
import { protractor } from 'protractor/built/ptor'

describe('Prueba configuraciones generales', () => {
    let page = new WoFrontendPage();
    var select = page.getParagraphOpcionesCampo();

    beforeAll(() => {
        page.LogIn();
        browser.sleep(2000);
        page.getParagraphMenuConfiguracion().click();
        page.getParagraphConfiguracionGeneral().click();
    });
    afterAll(() => {
        page.getParagraphLogoUsuario().click();
        page.getParagraphCerrarSesion().click();
    });
    // it('deberia existir la opcion de 0 y 2 decimales', () => {
    //     browser.actions().mouseMove(page.getParagraphFechasInventariosConfiguracionGeneral().first()).click().perform();
    //     var c = page.getParagraphSelectOption().count();
    //     var elm1 = page.getParagraphSelectOption().get(0).getText();
    //     var elm2 = page.getParagraphSelectOption().get(1).getText();
    //     expect(c).toEqual(2);
    //     expect(elm1).toEqual(' 0 ');
    //     expect(elm2).toEqual(' 2 ');
    //     page.getParagraphSelectOption().get(0).click();
    //     page.gerParagraphCerrraVentana().get(0).click();
    // });
    // it('validar que la opcion 0 decimales no interfiera con los documentos', async () => {

    //     //remision de ventas
    //     page.getParagraphMenuVentas().click();
    //     page.getParagraphVentasRemisionVentas().click()
    //     page.crearFactura('conceptoP', 'app-remision', 0);
    //     browser.sleep(5000);
    //     browser.actions().mouseMove(page.getParagraphMenu().first()).click().perform();
    //     browser.waitForAngularEnabled(true);
    //     page.getParagraphBotonEditar().click();
    //     var eler = element.all(by.tagName('table')).first().all(by.tagName('tr')).get(1).all(by.tagName('td')).get(4).element(by.tagName('input'));
    //     var cantidad = await eler.getAttribute('value');
    //     var ele = element.all(by.tagName('table')).first().all(by.tagName('tr')).get(1).all(by.tagName('td')).get(4).element(by.tagName('input'));
    //     browser.actions().mouseMove(ele).doubleClick().sendKeys(protractor.Key.DELETE).sendKeys('150000').sendKeys(protractor.Key.TAB).perform();
    //     expect(page.numeroSeparadores(cantidad)).not.toEqual('0,00');
    //     page.getParagraphFacturaVentaPiePaginaBotonContabilizar().click();
    //     var elm1 = element(by.className('dialogAlert dialogAlertExito'));
    //     expect((elm1).isDisplayed()).toBeTruthy();
    //     page.getParagraphCerrarMensajeAlerta().click();
    //     page.gerParagraphCerrraVentana().get(1).click();
    //     page.gerParagraphCerrraVentana().get(0).click();
    //     //Facturade ventas
    //     page.getParagraphMenuVentas().click();
    //     page.getParagraphVentasFacturaVenta().click();
    //     page.crearFactura('conceptoP', 'app-factura-venta', 0);
    //     browser.actions().mouseMove(page.getParagraphMenu().first()).click().perform();
    //     browser.waitForAngularEnabled(true);
    //     page.getParagraphBotonEditar().click();
    //     page.getParagraphFacturaVentaPiePaginaBotonContabilizar().click();
    //     expect((elm1).isDisplayed()).toBeTruthy();
    //     page.getParagraphCerrarMensajeAlerta().click();
    //     page.gerParagraphCerrraVentana().get(1).click();
    //     page.gerParagraphCerrraVentana().get(0).click();
    //     //Devolucion remision de ventas
    //     page.getParagraphMenuVentas().click();
    //     page.getParagraphVentasDevolucioRemisionVentas().click()
    //     page.crearFactura('conceptoP', 'app-devolucion-remision', 0);
    //     browser.actions().mouseMove(page.getParagraphMenu().first()).click().perform();
    //     browser.waitForAngularEnabled(true);
    //     page.getParagraphBotonEditar().click();
    //     page.getParagraphFacturaVentaPiePaginaBotonContabilizar().click();
    //     expect((elm1).isDisplayed()).toBeTruthy();
    //     page.getParagraphCerrarMensajeAlerta().click();
    //     page.gerParagraphCerrraVentana().get(1).click();
    //     page.gerParagraphCerrraVentana().get(0).click();
    //     //Nota debito
    //     page.getParagraphMenuVentas().click();
    //     page.getParagraphMenuNotaDebito().click();
    //     var nombre = 'app-nota-debito';
    //     page.BurbujaNuevo();
    //     page.getParagraphFacturaVentaEmpresa().click();
    //     page.getParagraphFacturaVentaEmpresaOpciones(0).click();
    //     page.getParagraphFacturaVentaCliente().click();
    //     page.getParagraphFacturaVentaClienteOpciones().get(0).click();
    //     page.getParagraphFacturaVentaVendedor().click();
    //     page.getParagraphFacturaVentaVendedorOpciones().get(0).click();
    //     page.getParagraphFacturaVentaFormaPago().click();
    //     page.getParagraphFacturaVentaFormaPagoOpciones().get(1).click();
    //     page.getParagraphFacturaVentaConcepto().clear();
    //     page.getParagraphFacturaVentaConcepto().sendKeys('concepto' + 1);
    //     page.getParagraphDocumentoDocumentoAsociado().click();
    //     page.getParagraphDocumentoDocumentoAsociadoOpciones().get(0).click();
    //     page.getParagraphNotaDebitoMotivoDevolucion().click();
    //     page.getParagraphNotaDebitoMotivoDevolucionOpciones(0).click();
    //     page.getParagraphDocumentoPrefijo(nombre, 0).click();
    //     page.getParagraphDocumentoPrefijoOpciones(nombre).get(0).click();
    //     page.getParagraphDocumentofacturacionesExtra(nombre).get(1).click();
    //     page.getParagraphNotaDebitoCruzamiento().click();
    //     page.getParagraphDocumentoFacturaciones(nombre).click();
    //     page.getParagraphFacturaVentaPiePaginaBotonContabilizar().click();
    //     expect((elm1).isDisplayed()).toBeTruthy();
    //     page.getParagraphCerrarMensajeAlerta().click();
    //     page.gerParagraphCerrraVentana().get(1).click();
    //     page.gerParagraphCerrraVentana().get(0).click();
    //     //Nota credito
    //     page.getParagraphMenuVentas().click();
    //     page.getParagraphMenuNotaCredito().click();
    //     var nombre = 'app-nota-credito';
    //     page.BurbujaNuevo();
    //     page.getParagraphFacturaVentaEmpresa().click();
    //     page.getParagraphFacturaVentaEmpresaOpciones(0).click();
    //     page.getParagraphFacturaVentaCliente().click();
    //     page.getParagraphFacturaVentaClienteOpciones().get(0).click();
    //     page.getParagraphFacturaVentaVendedor().click();
    //     page.getParagraphFacturaVentaVendedorOpciones().get(0).click();
    //     page.getParagraphFacturaVentaFormaPago().click();
    //     page.getParagraphFacturaVentaFormaPagoOpciones().get(1).click();
    //     page.getParagraphFacturaVentaConcepto().clear();
    //     page.getParagraphFacturaVentaConcepto().sendKeys('concepto' + 1);
    //     page.getParagraphDocumentoDocumentoAsociado().click();
    //     page.getParagraphDocumentoDocumentoAsociadoOpciones().get(0).click();
    //     page.getParagraphNotaDebitoMotivoDevolucion().click();
    //     page.getParagraphNotaDebitoMotivoDevolucionOpciones(0).click();
    //     page.getParagraphInventarioDetalleGrupoInventario().click()
    //     page.getParagraphNotaCreditoClasificacionOpciones(0).click();
    //     page.getParagraphDocumentoPrefijo(nombre, 0).click();
    //     page.getParagraphDocumentoPrefijoOpciones(nombre).get(0).click();
    //     page.getParagraphDocumentofacturacionesExtra(nombre).get(1).click();
    //     page.getParagraphNotaDebitoCruzamiento().click();
    //     page.getParagraphDocumentoFacturaciones(nombre).click();
    //     page.getParagraphFacturaVentaPiePaginaBotonContabilizar().click();
    //     expect((elm1).isDisplayed()).toBeTruthy();
    //     page.getParagraphCerrarMensajeAlerta().click();
    //     page.gerParagraphCerrraVentana().get(1).click();
    //     page.gerParagraphCerrraVentana().get(0).click();
    //     //Remision de compra
    //     page.getParagraphCompras().click();
    //     page.getParagraphMenuRemisionCompra().click()
    //     page.crearDocumentoCompra('conceptoP');
    //     browser.actions().mouseMove(page.getParagraphMenu().first()).click().perform();
    //     browser.waitForAngularEnabled(true);
    //     page.getParagraphBotonEditar().click();
    //     var eler = element.all(by.tagName('table')).first().all(by.tagName('tr')).get(1).all(by.tagName('td')).get(4).element(by.tagName('input'));
    //     var cantidad = await eler.getAttribute('value');
    //     var ele = element.all(by.tagName('table')).first().all(by.tagName('tr')).get(1).all(by.tagName('td')).get(4).element(by.tagName('input'));
    //     browser.actions().mouseMove(ele).doubleClick().sendKeys(protractor.Key.DELETE).sendKeys('150000').sendKeys(protractor.Key.TAB).perform();
    //     expect(page.numeroSeparadores(cantidad)).not.toEqual('0,00');
    //     page.getParagraphFacturaVentaPiePaginaBotonContabilizar().click();
    //     expect((elm1).isDisplayed()).toBeTruthy();
    //     page.getParagraphCerrarMensajeAlerta().click();
    //     page.gerParagraphCerrraVentana().get(1).click();
    //     page.gerParagraphCerrraVentana().get(0).click();
    //     //Factura de compra
    //     page.getParagraphCompras().click();
    //     page.getParagraphMenuFacturaCompra().click();
    //     page.crearDocumentoCompra('conceptoP');
    //     browser.actions().mouseMove(page.getParagraphMenu().first()).click().perform();
    //     browser.waitForAngularEnabled(true);
    //     page.getParagraphBotonEditar().click();
    //     page.getParagraphFacturaVentaPiePaginaBotonContabilizar().click();
    //     expect((elm1).isDisplayed()).toBeTruthy();
    //     page.getParagraphCerrarMensajeAlerta().click();
    //     page.gerParagraphCerrraVentana().get(1).click();
    //     page.gerParagraphCerrraVentana().get(0).click();
    //     //devolucion de remision de compra
    //     page.getParagraphCompras().click();
    //     page.getParagraphMenuDevolucionRemisionCompra().click();
    //     page.crearDocumentoCompra('conceptoP');
    //     browser.actions().mouseMove(page.getParagraphMenu().first()).click().perform();
    //     browser.waitForAngularEnabled(true);
    //     page.getParagraphBotonEditar().click();
    //     page.getParagraphFacturaVentaPiePaginaBotonContabilizar().click();
    //     expect((elm1).isDisplayed()).toBeTruthy();
    //     page.getParagraphCerrarMensajeAlerta().click();
    //     page.gerParagraphCerrraVentana().get(1).click();
    //     page.gerParagraphCerrraVentana().get(0).click();

    //     //Nota debito Compras
    //     page.getParagraphCompras().click();
    //     page.getParagraphNotaDebitoProveedores().click()
    //     var nombre = 'app-nota-debito-proveedores';
    //     page.BurbujaNuevo();
    //     page.getParagraphFacturaVentaEmpresa().click();
    //     page.getParagraphFacturaVentaEmpresaOpciones(0).click();
    //     page.getParagraphFacturaVentaCliente().click();
    //     page.getParagraphFacturaVentaClienteOpciones().get(0).click();
    //     page.getParagraphFacturaVentaVendedor().click();
    //     page.getParagraphFacturaVentaVendedorOpciones().get(0).click();
    //     page.getParagraphFacturaVentaFormaPago().click();
    //     page.getParagraphFacturaVentaFormaPagoOpciones().get(1).click();
    //     page.getParagraphFacturaVentaConcepto().clear();
    //     page.getParagraphFacturaVentaConcepto().sendKeys('concepto' + 1);
    //     page.getParagraphDocumentoDocumentoAsociado().click();
    //     page.getParagraphDocumentoDocumentoAsociadoOpciones().get(0).click();
    //     page.getParagraphDocumentofacturacionesExtra(nombre).get(1).click();
    //     page.getParagraphNotaDebitoCruzamiento().click();
    //     page.getParagraphDocumentoFacturaciones(nombre).click();
    //     page.getParagraphFacturaVentaPiePaginaBotonContabilizar().click();
    //     expect((elm1).isDisplayed()).toBeTruthy();
    //     page.getParagraphCerrarMensajeAlerta().click();
    //     page.gerParagraphCerrraVentana().get(1).click();
    //     page.gerParagraphCerrraVentana().get(0).click();
    //     //Nota credito Compras
    //     page.getParagraphCompras().click();
    //     page.getParagraphNotaCreditoProveedores().click();
    //     var nombre = 'app-nota-credito-proveedores';
    //     page.BurbujaNuevo();
    //     page.getParagraphFacturaVentaEmpresa().click();
    //     page.getParagraphFacturaVentaEmpresaOpciones(0).click();
    //     page.getParagraphFacturaVentaCliente().click();
    //     page.getParagraphFacturaVentaClienteOpciones().get(0).click();
    //     page.getParagraphFacturaVentaVendedor().click();
    //     page.getParagraphFacturaVentaVendedorOpciones().get(0).click();
    //     page.getParagraphFacturaVentaFormaPago().click();
    //     page.getParagraphFacturaVentaFormaPagoOpciones().get(1).click();
    //     page.getParagraphFacturaVentaConcepto().clear();
    //     page.getParagraphFacturaVentaConcepto().sendKeys('concepto' + 1);
    //     page.getParagraphDocumentoDocumentoAsociado().click();
    //     page.getParagraphDocumentoDocumentoAsociadoOpciones().get(0).click();
    //     page.getParagraphInventarioDetalleGrupoInventario().click()
    //     page.getParagraphNotaCreditoClasificacionOpciones(0).click();
    //     page.getParagraphDocumentofacturacionesExtra(nombre).get(1).click();
    //     page.getParagraphNotaDebitoCruzamiento().click();
    //     page.getParagraphDocumentoFacturaciones(nombre).click();
    //     page.getParagraphFacturaVentaPiePaginaBotonContabilizar().click();
    //     expect((elm1).isDisplayed()).toBeTruthy();
    //     page.gerParagraphCerrraVentana().get(1).click();
    //     page.gerParagraphCerrraVentana().get(0).click();

    // });
    // it('validar que la opcion 2 decimales no interfiera con los documentos', async () => {
    //     page.getParagraphMenuConfiguracion().click();
    //     page.getParagraphConfiguracionGeneral().click();
    //     browser.actions().mouseMove(page.getParagraphFechasInventariosConfiguracionGeneral().first()).click().perform();
    //     page.getParagraphSelectOption().get(1).click();
    //     page.gerParagraphCerrraVentana().get(0).click();
    //     //remision de ventas
    //     page.getParagraphMenuVentas().click();
    //     page.getParagraphVentasRemisionVentas().click()
    //     page.crearFactura('conceptoP', 'app-remision', 0);
    //     browser.sleep(5000);
    //     browser.actions().mouseMove(page.getParagraphMenu().first()).click().perform();
    //     browser.waitForAngularEnabled(true);
    //     page.getParagraphBotonEditar().click();
    //     var eler = element.all(by.tagName('table')).first().all(by.tagName('tr')).get(1).all(by.tagName('td')).get(4).element(by.tagName('input'));
    //     var cantidad = await eler.getAttribute('value');
    //     var ele = element.all(by.tagName('table')).first().all(by.tagName('tr')).get(1).all(by.tagName('td')).get(4).element(by.tagName('input'));
    //     browser.actions().mouseMove(ele).doubleClick().sendKeys(protractor.Key.DELETE).sendKeys('150000').sendKeys(protractor.Key.TAB).perform();
    //     expect(page.numeroSeparadores(cantidad)).not.toEqual('0,00');
    //     page.getParagraphFacturaVentaPiePaginaBotonContabilizar().click();
    //     var elm1 = element(by.className('dialogAlert dialogAlertExito'));
    //     expect((elm1).isDisplayed()).toBeTruthy();
    //     page.getParagraphCerrarMensajeAlerta().click();
    //     page.gerParagraphCerrraVentana().get(1).click();
    //     page.gerParagraphCerrraVentana().get(0).click();
    //     //Facturade ventas
    //     page.getParagraphMenuVentas().click();
    //     page.getParagraphVentasFacturaVenta().click();
    //     page.crearFactura('conceptoP', 'app-factura-venta', 0);
    //     browser.actions().mouseMove(page.getParagraphMenu().first()).click().perform();
    //     browser.waitForAngularEnabled(true);
    //     page.getParagraphBotonEditar().click();
    //     page.getParagraphFacturaVentaPiePaginaBotonContabilizar().click();
    //     expect((elm1).isDisplayed()).toBeTruthy();
    //     page.getParagraphCerrarMensajeAlerta().click();
    //     page.gerParagraphCerrraVentana().get(1).click();
    //     page.gerParagraphCerrraVentana().get(0).click();
    //     //Devolucion remision de ventas
    //     page.getParagraphMenuVentas().click();
    //     page.getParagraphVentasDevolucioRemisionVentas().click()
    //     page.crearFactura('conceptoP', 'app-devolucion-remision', 0);
    //     browser.actions().mouseMove(page.getParagraphMenu().first()).click().perform();
    //     browser.waitForAngularEnabled(true);
    //     page.getParagraphBotonEditar().click();
    //     page.getParagraphFacturaVentaPiePaginaBotonContabilizar().click();
    //     expect((elm1).isDisplayed()).toBeTruthy();
    //     page.getParagraphCerrarMensajeAlerta().click();
    //     page.gerParagraphCerrraVentana().get(1).click();
    //     page.gerParagraphCerrraVentana().get(0).click();
    //     //Nota debito
    //     page.getParagraphMenuVentas().click();
    //     page.getParagraphMenuNotaDebito().click();
    //     var nombre = 'app-nota-debito';
    //     page.BurbujaNuevo();
    //     page.getParagraphFacturaVentaEmpresa().click();
    //     page.getParagraphFacturaVentaEmpresaOpciones(0).click();
    //     page.getParagraphFacturaVentaCliente().click();
    //     page.getParagraphFacturaVentaClienteOpciones().get(0).click();
    //     page.getParagraphFacturaVentaVendedor().click();
    //     page.getParagraphFacturaVentaVendedorOpciones().get(0).click();
    //     page.getParagraphFacturaVentaFormaPago().click();
    //     page.getParagraphFacturaVentaFormaPagoOpciones().get(1).click();
    //     page.getParagraphFacturaVentaConcepto().clear();
    //     page.getParagraphFacturaVentaConcepto().sendKeys('concepto' + 1);
    //     page.getParagraphDocumentoDocumentoAsociado().click();
    //     page.getParagraphDocumentoDocumentoAsociadoOpciones().get(0).click();
    //     page.getParagraphNotaDebitoMotivoDevolucion().click();
    //     page.getParagraphNotaDebitoMotivoDevolucionOpciones(0).click();
    //     page.getParagraphDocumentoPrefijo(nombre, 0).click();
    //     page.getParagraphDocumentoPrefijoOpciones(nombre).get(0).click();
    //     page.getParagraphDocumentofacturacionesExtra(nombre).get(1).click();
    //     page.getParagraphNotaDebitoCruzamiento().click();
    //     page.getParagraphDocumentoFacturaciones(nombre).click();
    //     page.getParagraphFacturaVentaPiePaginaBotonContabilizar().click();
    //     expect((elm1).isDisplayed()).toBeTruthy();
    //     page.getParagraphCerrarMensajeAlerta().click();
    //     page.gerParagraphCerrraVentana().get(1).click();
    //     page.gerParagraphCerrraVentana().get(0).click();
    //     //Nota credito
    //     page.getParagraphMenuVentas().click();
    //     page.getParagraphMenuNotaCredito().click();
    //     var nombre = 'app-nota-credito';
    //     page.BurbujaNuevo();
    //     page.getParagraphFacturaVentaEmpresa().click();
    //     page.getParagraphFacturaVentaEmpresaOpciones(0).click();
    //     page.getParagraphFacturaVentaCliente().click();
    //     page.getParagraphFacturaVentaClienteOpciones().get(0).click();
    //     page.getParagraphFacturaVentaVendedor().click();
    //     page.getParagraphFacturaVentaVendedorOpciones().get(0).click();
    //     page.getParagraphFacturaVentaFormaPago().click();
    //     page.getParagraphFacturaVentaFormaPagoOpciones().get(1).click();
    //     page.getParagraphFacturaVentaConcepto().clear();
    //     page.getParagraphFacturaVentaConcepto().sendKeys('concepto' + 1);
    //     page.getParagraphDocumentoDocumentoAsociado().click();
    //     page.getParagraphDocumentoDocumentoAsociadoOpciones().get(0).click();
    //     page.getParagraphNotaDebitoMotivoDevolucion().click();
    //     page.getParagraphNotaDebitoMotivoDevolucionOpciones(0).click();
    //     page.getParagraphInventarioDetalleGrupoInventario().click()
    //     page.getParagraphNotaCreditoClasificacionOpciones(0).click();
    //     page.getParagraphDocumentoPrefijo(nombre, 0).click();
    //     page.getParagraphDocumentoPrefijoOpciones(nombre).get(0).click();
    //     page.getParagraphDocumentofacturacionesExtra(nombre).get(1).click();
    //     page.getParagraphNotaDebitoCruzamiento().click();
    //     page.getParagraphDocumentoFacturaciones(nombre).click();
    //     page.getParagraphFacturaVentaPiePaginaBotonContabilizar().click();
    //     expect((elm1).isDisplayed()).toBeTruthy();
    //     page.getParagraphCerrarMensajeAlerta().click();
    //     page.gerParagraphCerrraVentana().get(1).click();
    //     page.gerParagraphCerrraVentana().get(0).click();
    //     //Remision de compra
    //     page.getParagraphCompras().click();
    //     page.getParagraphMenuRemisionCompra().click()
    //     page.crearDocumentoCompra('conceptoP');
    //     browser.actions().mouseMove(page.getParagraphMenu().first()).click().perform();
    //     browser.waitForAngularEnabled(true);
    //     page.getParagraphBotonEditar().click();
    //     var eler = element.all(by.tagName('table')).first().all(by.tagName('tr')).get(1).all(by.tagName('td')).get(4).element(by.tagName('input'));
    //     var cantidad = await eler.getAttribute('value');
    //     var ele = element.all(by.tagName('table')).first().all(by.tagName('tr')).get(1).all(by.tagName('td')).get(4).element(by.tagName('input'));
    //     browser.actions().mouseMove(ele).doubleClick().sendKeys(protractor.Key.DELETE).sendKeys('150000').sendKeys(protractor.Key.TAB).perform();
    //     expect(page.numeroSeparadores(cantidad)).not.toEqual('0,00');
    //     page.getParagraphFacturaVentaPiePaginaBotonContabilizar().click();
    //     expect((elm1).isDisplayed()).toBeTruthy();
    //     page.getParagraphCerrarMensajeAlerta().click();
    //     page.gerParagraphCerrraVentana().get(1).click();
    //     page.gerParagraphCerrraVentana().get(0).click();
    //     //Factura de compra
    //     page.getParagraphCompras().click();
    //     page.getParagraphMenuFacturaCompra().click();
    //     page.crearDocumentoCompra('conceptoP');
    //     browser.actions().mouseMove(page.getParagraphMenu().first()).click().perform();
    //     browser.waitForAngularEnabled(true);
    //     page.getParagraphBotonEditar().click();
    //     page.getParagraphFacturaVentaPiePaginaBotonContabilizar().click();
    //     expect((elm1).isDisplayed()).toBeTruthy();
    //     page.getParagraphCerrarMensajeAlerta().click();
    //     page.gerParagraphCerrraVentana().get(1).click();
    //     page.gerParagraphCerrraVentana().get(0).click();
    //     //devolucion de remision de compra
    //     page.getParagraphCompras().click();
    //     page.getParagraphMenuDevolucionRemisionCompra().click();
    //     page.crearDocumentoCompra('conceptoP');
    //     browser.actions().mouseMove(page.getParagraphMenu().first()).click().perform();
    //     browser.waitForAngularEnabled(true);
    //     page.getParagraphBotonEditar().click();
    //     page.getParagraphFacturaVentaPiePaginaBotonContabilizar().click();
    //     expect((elm1).isDisplayed()).toBeTruthy();
    //     page.getParagraphCerrarMensajeAlerta().click();
    //     page.gerParagraphCerrraVentana().get(1).click();
    //     page.gerParagraphCerrraVentana().get(0).click();

    //     //Nota debito Compras
    //     page.getParagraphCompras().click();
    //     page.getParagraphNotaDebitoProveedores().click()
    //     var nombre = 'app-nota-debito-proveedores';
    //     page.BurbujaNuevo();
    //     page.getParagraphFacturaVentaEmpresa().click();
    //     page.getParagraphFacturaVentaEmpresaOpciones(0).click();
    //     page.getParagraphFacturaVentaCliente().click();
    //     page.getParagraphFacturaVentaClienteOpciones().get(0).click();
    //     page.getParagraphFacturaVentaVendedor().click();
    //     page.getParagraphFacturaVentaVendedorOpciones().get(0).click();
    //     page.getParagraphFacturaVentaFormaPago().click();
    //     page.getParagraphFacturaVentaFormaPagoOpciones().get(1).click();
    //     page.getParagraphFacturaVentaConcepto().clear();
    //     page.getParagraphFacturaVentaConcepto().sendKeys('concepto' + 1);
    //     page.getParagraphDocumentoDocumentoAsociado().click();
    //     page.getParagraphDocumentoDocumentoAsociadoOpciones().get(0).click();
    //     page.getParagraphDocumentofacturacionesExtra(nombre).get(1).click();
    //     page.getParagraphNotaDebitoCruzamiento().click();
    //     page.getParagraphDocumentoFacturaciones(nombre).click();
    //     page.getParagraphFacturaVentaPiePaginaBotonContabilizar().click();
    //     expect((elm1).isDisplayed()).toBeTruthy();
    //     page.getParagraphCerrarMensajeAlerta().click();
    //     page.gerParagraphCerrraVentana().get(1).click();
    //     page.gerParagraphCerrraVentana().get(0).click();
    //     //Nota credito Compras
    //     page.getParagraphCompras().click();
    //     page.getParagraphNotaCreditoProveedores().click();
    //     var nombre = 'app-nota-credito-proveedores';
    //     page.BurbujaNuevo();
    //     page.getParagraphFacturaVentaEmpresa().click();
    //     page.getParagraphFacturaVentaEmpresaOpciones(0).click();
    //     page.getParagraphFacturaVentaCliente().click();
    //     page.getParagraphFacturaVentaClienteOpciones().get(0).click();
    //     page.getParagraphFacturaVentaVendedor().click();
    //     page.getParagraphFacturaVentaVendedorOpciones().get(0).click();
    //     page.getParagraphFacturaVentaFormaPago().click();
    //     page.getParagraphFacturaVentaFormaPagoOpciones().get(1).click();
    //     page.getParagraphFacturaVentaConcepto().clear();
    //     page.getParagraphFacturaVentaConcepto().sendKeys('concepto' + 1);
    //     page.getParagraphDocumentoDocumentoAsociado().click();
    //     page.getParagraphDocumentoDocumentoAsociadoOpciones().get(0).click();
    //     page.getParagraphInventarioDetalleGrupoInventario().click()
    //     page.getParagraphNotaCreditoClasificacionOpciones(0).click();
    //     page.getParagraphDocumentofacturacionesExtra(nombre).get(1).click();
    //     page.getParagraphNotaDebitoCruzamiento().click();
    //     page.getParagraphDocumentoFacturaciones(nombre).click();
    //     page.getParagraphFacturaVentaPiePaginaBotonContabilizar().click();
    //     expect((elm1).isDisplayed()).toBeTruthy();
    //     page.gerParagraphCerrraVentana().get(1).click();
    //     page.gerParagraphCerrraVentana().get(0).click();

    // });
    // it('Deberia en contabilidad estar todos los cheks desactivados', () => {
    //     page.getParagraphMenuConfiguracion().click();
    //     page.getParagraphConfiguracionGeneral().click();
    //     browser.sleep(1000);
    //     expect(page.getParagraphFacturaVentaConfiguracionGeneral().getAttribute('checked')).not.toBeTruthy();
    //     expect(page.getParagraphFacturacompraConfiguracionGeneral().getAttribute('checked')).not.toBeTruthy();
    //     expect(page.getParagraphNotasCreditoclientesConfiguracionGeneral().getAttribute('checked')).not.toBeTruthy();
    //     expect(page.getParagraphNotasDebitoclientesConfiguracionGeneral().getAttribute('checked')).not.toBeTruthy();
    //     expect(page.getParagraphNotasCreditoproveedoresConfiguracionGeneral().getAttribute('checked')).not.toBeTruthy();
    //     expect(page.getParagraphNotasDebitoproveedoresConfiguracionGeneral().getAttribute('checked')).not.toBeTruthy();
    //     page.gerParagraphCerrraVentana().last().click();
    // });
    // it('Deberian estar Factura de Venta - Factura de Compra - Nota Crédito Clientes - Nota Débito Clientes - Nota Crédito Proveedores - Nota Débito Proveedores Desactivados' , () => {
    //     var elm1 = element(by.id('ajustarColumna-tercero-WT_MOVIMIENTO_INVENTARIO_FV'));
    //     //Facturade compra
    //     page.getParagraphCompras().click();
    //     page.getParagraphMenuFacturaCompra().click();
    //     page.BurbujaNuevo();
    //     expect((elm1).isDisplayed()).toBeTruthy();
    //     //Facturade debito provedores
    //     page.getParagraphCompras().click();
    //     page.getParagraphNotaDebitoProveedores().click();
    //     page.BurbujaNuevo();
    //     expect((elm1).isDisplayed()).toBeTruthy();
    //     //Facturade credito proveedores
    //     page.getParagraphCompras().click();
    //     page.getParagraphNotaCreditoProveedores().click();
    //     page.BurbujaNuevo();
    //     expect((elm1).isDisplayed()).toBeTruthy();
    //     //Facturade ventas
    //     page.getParagraphMenuVentas().click();
    //     page.getParagraphVentasFacturaVenta().click();
    //     page.BurbujaNuevo();
    //     expect((elm1).isDisplayed()).toBeTruthy();
    //     //Nota debito
    //     page.getParagraphMenuVentas().click();
    //     page.getParagraphMenuNotaDebito().click();
    //     page.BurbujaNuevo();
    //     expect((elm1).isDisplayed()).toBeTruthy();
    //     //Nota credito
    //     page.getParagraphMenuVentas().click();
    //     page.getParagraphMenuNotaCredito().click();
    //     page.BurbujaNuevo();
    //     expect((elm1).isDisplayed()).toBeTruthy();
    // });
    //FIXME:
    //  it('Deberia en contabilidad darle click a un check y guardar cambios', () => {
    //     browser.actions().mouseMove(page.getParagraphFechasInventariosConfiguracionGeneral().first()).click().perform();
    //     var c = page.getParagraphSelectOption().count();
    //     var elm1 = page.getParagraphSelectOption().get(0).getText();
    //     var elm2 = page.getParagraphSelectOption().get(1).getText();
    //     expect(c).toEqual(2);
    //     expect(elm1).toEqual(' 0 ');
    //     expect(elm2).toEqual(' 2 ');

    //  });
    // it('Deberian estar Factura de Venta - Factura de Compra - Nota Crédito Clientes - Nota Débito Clientes - Nota Crédito Proveedores - Nota Débito Proveedores', () => {
    //     page.getParagraphMenuConfiguracion().click();
    //     page.getParagraphConfiguracionGeneral().click();
    //     var n1 = page.getParagraphElementosLista(0).getText();
    //     expect(n1).toEqual('Factura de Venta');
    //     var n2 = page.getParagraphElementosLista(1).getText();
    //     expect(n2).toEqual('Factura de Compra');
    //     var n3 = page.getParagraphElementosLista(2).getText();
    //     expect(n3).toEqual('Nota Crédito Clientes');
    //     var n4 = page.getParagraphElementosLista(3).getText();
    //     expect(n4).toEqual('Nota Débito Clientes');
    //     var n5 = page.getParagraphElementosLista(4).getText();
    //     expect(n5).toEqual('Nota Crédito Proveedores');
    //     var n6 = page.getParagraphElementosLista(5).getText();
    //     expect(n6).toEqual('Nota Débito Proveedores');
    //     page.gerParagraphCerrraVentana().last().click();

    // });

    // it('Deberia en contabilidad darle click a un check y guardar cambios', () => {
    //     browser.sleep(1000);
    //     browser.actions().mouseMove(page.getParagraphNotasCreditoproveedoresConfiguracionGeneral()).click().perform();
    //     browser.actions().mouseMove(page.getParagraphNotasDebitoproveedoresConfiguracionGeneral()).click().perform();
    // });
    // it('Deberian estar en Factura de Venta - Factura de Compra - Nota Crédito Clientes - Nota Débito Clientes - Nota Crédito Proveedores - Nota Débito Proveedores el campo "TERCERO"', () => {
    //     var elm1 = element(by.id('ajustarColumna-tercero-WT_MOVIMIENTO_INVENTARIO_FV'));
    //     //Facturade compra
    //     page.getParagraphCompras().click();
    //     page.getParagraphMenuFacturaCompra().click();
    //     page.BurbujaNuevo();
    //     expect((elm1).isDisplayed()).toBeTruthy();
    //     //Facturade debito provedores
    //     page.getParagraphCompras().click();
    //     page.getParagraphNotaDebitoProveedores().click();
    //     page.BurbujaNuevo();
    //     expect((elm1).isDisplayed()).toBeTruthy();
    //     //Facturade credito proveedores
    //     page.getParagraphCompras().click();
    //     page.getParagraphNotaCreditoProveedores().click();
    //     page.BurbujaNuevo();
    //     expect((elm1).isDisplayed()).toBeTruthy();
    //     //Facturade ventas
    //     page.getParagraphMenuVentas().click();
    //     page.getParagraphVentasFacturaVenta().click();
    //     page.BurbujaNuevo();
    //     expect((elm1).isDisplayed()).toBeTruthy();
    //     //Nota debito
    //     page.getParagraphMenuVentas().click();
    //     page.getParagraphMenuNotaDebito().click();
    //     page.BurbujaNuevo();
    //     expect((elm1).isDisplayed()).toBeTruthy();
    //     //Nota credito
    //     page.getParagraphMenuVentas().click();
    //     page.getParagraphMenuNotaCredito().click();
    //     page.BurbujaNuevo();
    //     expect((elm1).isDisplayed()).toBeTruthy();

    // });
    it('Deberia verificar que Las Columnas Plantillas Predeterminadas y Plantillas Facturación Electrónica por defecto están vacías', () => {
        page.getParagraphConfiguracionImpresiones().click();
        page.getParagraphPaginacionMostrar().click();
        page.getParagraphPaginacionMostrarOpciones().get(4).click();
        for (var i = 0; i < 23; i++) {
            expect(page.getParagraphTablaConfiguracionGeneral(i, 1).getText()).toEqual('');
        }
        for (var i = 0; i < 23; i++) {
            expect(page.getParagraphTablaConfiguracionGeneral(i, 2).getText()).toEqual('');

        }

    });
    // it('Deberia estar la plantilla Estandar para todos los documentos', () => {

    //     for (var i = 0; i < 23; i++) {
    //         page.getParagraphTablaConfiguracionGeneral(i, 1).click()
    //         expect(element(by.cssContainingText('.ng-star-inserted', 'Estándar')).isDisplayed()).toBeTruthy();
    //         browser.sleep(2000);
    //         browser.actions().sendKeys(protractor.Key.TAB).perform();
    //     }


    // });
    it('deberian estar activados los checks de la columna Mostrar', () => {

        for (var i = 0; i < 23; i++) {
            expect(page.getParagraphTablaConfiguracionGeneral(i, 3).all(by.tagName('input')).get(0).getAttribute('checked')).toBeTruthy();
        }

    });

    it('Deberia aparecer un mensaje de error al desactivar los checks', () => {
        for (var i = 0; i < 23; i++) {
            var elm1 = element(by.className('dialogAlert dialogAlertAdvertencia'));
            browser.actions().mouseMove(page.getParagraphTablaConfiguracionGeneral(1, 3).all(by.tagName('input')).get(0)).click().perform();
            expect((elm1).isDisplayed()).toBeTruthy();
            page.getParagraphConfirmarCerrarMensajeAdvertencia().click();

        }

    });
    it('Deberia poder desactivar los checks', () => {

        for (var i = 0; i < 23; i++) {
            page.getParagraphTablaConfiguracionGeneral(i, 1).click();
            select.get(0).click();

        }

        for (var i = 0; i < 23; i++) {
            
            if (i != 0 && i != 6 && i != 7) {
                browser.actions().mouseMove(page.getParagraphTablaConfiguracionGeneral(i, 3).all(by.tagName('input')).get(0)).click().perform();
                expect(page.getParagraphTablaConfiguracionGeneral(i, 3).all(by.tagName('input')).get(0).getAttribute('checked')).not.toBeTruthy();

            }
        }

    });
    it('Deberia aparecer un mensaje de error al desactivar los checks Factura de Venta - Nota Débito Clientes - Nota Crédito Cliente si no se tiene plantilla de factura electronica', () => {
        var elm1 = element(by.className('dialogAlert dialogAlertAdvertencia'));
        browser.actions().mouseMove(page.getParagraphTablaConfiguracionGeneral(0, 3).all(by.tagName('input')).get(0)).click().perform();
        expect((elm1).isDisplayed()).toBeTruthy();
        page.getParagraphConfirmarCerrarMensajeAdvertencia().click();
        browser.actions().mouseMove(page.getParagraphTablaConfiguracionGeneral(6, 3).all(by.tagName('input')).get(0)).click().perform();
        expect((elm1).isDisplayed()).toBeTruthy();
        page.getParagraphConfirmarCerrarMensajeAdvertencia().click();
        browser.actions().mouseMove(page.getParagraphTablaConfiguracionGeneral(7, 3).all(by.tagName('input')).get(0)).click().perform();
        expect((elm1).isDisplayed()).toBeTruthy();
        page.getParagraphConfirmarCerrarMensajeAdvertencia().click();

    });
    it('Deberia seleccionar formato para  facturacion elctronica', () => {

        page.getParagraphTablaConfiguracionGeneral(0, 2).click();
        select.get(0).click();
        page.getParagraphTablaConfiguracionGeneral(6, 2).click();
        select.get(0).click();
        page.getParagraphTablaConfiguracionGeneral(7, 2).click();
        select.get(0).click();



    });
    it('Deberia poder desactivar los checks Factura de Venta - Nota Débito Clientes - Nota Crédito Cliente si no se tiene plantilla de factura electronica', () => {

        browser.actions().mouseMove(page.getParagraphTablaConfiguracionGeneral(0, 3).all(by.tagName('input')).get(0)).click().perform();
        expect(page.getParagraphTablaConfiguracionGeneral(0, 3).all(by.tagName('input')).get(0).getAttribute('checked')).not.toBeTruthy();
        browser.actions().mouseMove(page.getParagraphTablaConfiguracionGeneral(6, 3).all(by.tagName('input')).get(0)).click().perform();
        expect(page.getParagraphTablaConfiguracionGeneral(6, 3).all(by.tagName('input')).get(0).getAttribute('checked')).not.toBeTruthy();
        browser.actions().mouseMove(page.getParagraphTablaConfiguracionGeneral(7, 3).all(by.tagName('input')).get(0)).click().perform();
        expect(page.getParagraphTablaConfiguracionGeneral(7, 3).all(by.tagName('input')).get(0).getAttribute('checked')).not.toBeTruthy();

    });
    it('Deberia poder activar los checks de la columna mostrar', () => {


        for (var i = 0; i < 23; i++) {
            browser.actions().mouseMove(page.getParagraphTablaConfiguracionGeneral(i, 3).all(by.tagName('input')).get(0)).click().perform();
            expect(page.getParagraphTablaConfiguracionGeneral(i, 3).all(by.tagName('input')).get(0).getAttribute('checked')).toBeTruthy();
        }
    });
    it('deberian estar desactivados los checks de la columna revelaciones', () => {

        for (var i = 0; i < 23; i++) {
            expect(page.getParagraphTablaConfiguracionGeneral(i, 4).all(by.tagName('input')).get(0).getAttribute('checked')).toBeTruthy();
            expect(page.getParagraphTablaConfiguracionGeneral(i, 4).all(by.tagName('input')).get(0).getAttribute('checked')).not.toBeTruthy();
        }

    });
    it('Deberia poder activar los checks de la columna revelaciones', () => {


        for (var i = 0; i < 23; i++) {
            browser.actions().mouseMove(page.getParagraphTablaConfiguracionGeneral(i, 4).all(by.tagName('input')).get(0)).click().perform();
            expect(page.getParagraphTablaConfiguracionGeneral(i, 4).all(by.tagName('input')).get(0).getAttribute('checked')).toBeTruthy();
        }
    });
    it('Deberia poder desactivar los checks de la columna revelaciones', () => {


        for (var i = 0; i < 23; i++) {
            browser.actions().mouseMove(page.getParagraphTablaConfiguracionGeneral(i, 4).all(by.tagName('input')).get(0)).click().perform();
            expect(page.getParagraphTablaConfiguracionGeneral(i, 4).all(by.tagName('input')).get(0).getAttribute('checked')).not.toBeTruthy();
        }
    });
    it('Deberia paginar', () => {
        page.getParagraphPaginacionMostrar().click();
        page.getParagraphPaginacionMostrarOpciones().get(1).click();
        var valor = page.getParagraphPaginacionMostrar().getText();
        page.gerParagraphCerrraVentana().last().click();
        page.getParagraphMenuConfiguracion().click();
        page.getParagraphConfiguracionGeneral().click();
        page.getParagraphConfiguracionImpresiones().click();
        expect(valor).toEqual(page.getParagraphPaginacionMostrar().getText());
      });
    it('deberia cambiar la pagina ', async () => {
        page.getParagraphPaginasListado().get(1).click();
        var el = await element.all(by.className('active')).last().getText();
        var pag = await page.getParagraphNumeroPagina().getAttribute('value');
        expect(el).toEqual(pag);
    
      });
      it('deberia ir a la siguiente pagina ', async () => {
        page.getParagraphInformeSiguientePaginaTabla().click();
        var el = await element.all(by.className('active')).last().getText();
        var pag = await page.getParagraphNumeroPagina().getAttribute('value');
        expect(el).toEqual(pag);
    
      });
      it('deberia ir a la pagina anterior', async () => {
        page.getParagraphInformePaginaAnteriorTabla().click();
        var el = await element.all(by.className('active')).last().getText();
        var pag = await page.getParagraphNumeroPagina().getAttribute('value');
        expect(el).toEqual(pag);
      });
      it('deberia cambiar la pagina digitando el numero', async () => {
        page.getParagraphNumeroPagina().clear();
        browser.actions().mouseMove(page.getParagraphNumeroPagina()).click().sendKeys('2').sendKeys(protractor.Key.ENTER);
      });
    it('', () => {

    });
    // it('Deberia en facturacion darle click a un check y guardar cambios', () => {
    //     page.getParagraphFacturacionConfiguracionGeneral().click();
    //     browser.actions().mouseMove(page.getParagraphPlazosConfiguracionGeneral()).click().perform();
    //     expect(page.getParagraphPlazosConfiguracionGeneral().getAttribute('checked')).toBeTruthy();
    //     browser.actions().mouseMove(page.getParagraphAutorizacionDocumentosConfiguracionGeneral()).click().perform();
    //     expect(page.getParagraphAutorizacionDocumentosConfiguracionGeneral().getAttribute('checked')).toBeTruthy();
    //     page.gerParagraphCerrraVentana().last().click();
    //     page.getParagraphMenuConfiguracion().click();
    //     page.getParagraphConfiguracionGeneral().click();
    //     page.getParagraphFacturacionConfiguracionGeneral().click();
    //     browser.sleep(1000);
    //     browser.actions().mouseMove(page.getParagraphPlazosConfiguracionGeneral()).click().perform();
    //     browser.actions().mouseMove(page.getParagraphAutorizacionDocumentosConfiguracionGeneral()).click().perform();
    // });
    // it('Deberia en General mostrar el pais de residencia y moneda de este', () => {
    //     page.getParagraphGeneralConfiguracionGeneral().click();
    //     browser.sleep(1000);
    //     expect(page.getParagraphPaisConfiguracionGeneral().getText());
    //     expect(page.getParagraphMonedaPaisConfiguracionGeneral().getText());
    // });
    // it('Deberia en Impresiones modificar plantillas y estados', () => {
    //     page.getParagraphConfiguracionImpresiones().click();
    //     page.getParagraphPaginacionMostrar().click();
    //     page.getParagraphPaginacionMostrarOpciones().get(0).click();
    //     expect(page.getparagraphTablaCantidad().count()).toEqual(5);
    //     page.getParagraphPaginacionMostrar().click();
    //     page.getParagraphPaginacionMostrarOpciones().get(1).click();
    //     browser.sleep(9000);

    //     for(var i = 0 ; i<10 ;i++){
    //     browser.actions().mouseMove(page.getParagraphTablaConfiguracionGeneral(i, 1)).click().sendKeys(protractor.Key.DOWN).sendKeys(protractor.Key.ENTER).perform();
    //     browser.sleep(9000);
    //     browser.actions().mouseMove(page.getParagraphTablaConfiguracionGeneral(i, 2)).click().sendKeys(protractor.Key.DOWN).sendKeys(protractor.Key.ENTER).perform();
    //     browser.actions().mouseMove(page.getParagraphTablaConfiguracionGeneral(i, 3).element(by.tagName('input'))).click().perform();
    //     browser.actions().mouseMove(page.getParagraphTablaConfiguracionGeneral(i, 4).element(by.tagName('input'))).click().perform();
    //      }
    //      for(var i = 0 ; i<10 ;i++){
    //         browser.actions().mouseMove(page.getParagraphTablaConfiguracionGeneral(i, 3).element(by.tagName('input'))).click().perform();
    //         browser.actions().mouseMove(page.getParagraphTablaConfiguracionGeneral(i, 1)).click().sendKeys(protractor.Key.DELETE).perform();
    //         browser.actions().mouseMove(page.getParagraphTablaConfiguracionGeneral(i, 2)).click().sendKeys(protractor.Key.DELETE).perform();
    //         browser.actions().mouseMove(page.getParagraphTablaConfiguracionGeneral(i, 4).element(by.tagName('input'))).click().perform();
    //          }
    // });
    // it('Deberia poder modificar las opciones del apartado de inventarios',()=>{
    //     page.getParagraphConfiguraciongeneralInventarios().click();
    //     browser.actions().mouseMove(page.getParagraphInventariosConfiguracionGeneral()).click().perform();
    //     expect(page.getParagraphInventariosConfiguracionGeneral().getAttribute('checked')).not.toBeTruthy();
    //     page.gerParagraphCerrraVentana().last().click();
    //     page.getParagraphMenuConfiguracion().click();
    //     page.getParagraphConfiguracionGeneral().click();
    //     page.getParagraphConfiguraciongeneralInventarios().click();
    //     browser.sleep(1000);
    //     browser.actions().mouseMove(page.getParagraphFechasInventariosConfiguracionGeneral()).click().sendKeys(protractor.Key.DOWN).sendKeys(protractor.Key.ENTER).perform();
    //     browser.actions().mouseMove(page.getParagraphFechasInventariosConfiguracionGeneral()).click().sendKeys(protractor.Key.UP).sendKeys(protractor.Key.ENTER).perform();
    //     browser.actions().mouseMove(page.getParagraphInventariosConfiguracionGeneral()).click().perform();
    // });
    // it('Deberia en Precios y Desctos chequear cada opcion y cambiar opciones de precios', () => {
    //     page.getParagraphConfiguracionPrecioDescuentos().click();
    //     browser.actions().mouseMove(page.getParagraphPreciosConfiguracionGeneral()).click().sendKeys(protractor.Key.UP).sendKeys(protractor.Key.ENTER).perform();
    //     browser.actions().mouseMove(page.getParagraphPreciosConfiguracionGeneral()).click().sendKeys(protractor.Key.DOWN).sendKeys(protractor.Key.ENTER).perform();
    //     browser.actions().mouseMove(page.getParagraphDescuentosConfiguracionGeneral(1)).click().perform();
    //     expect(page.getParagraphDescuentosConfiguracionGeneral(1).getAttribute('checked')).toBeTruthy();
    //     browser.actions().mouseMove(page.getParagraphDescuentosConfiguracionGeneral(2)).click().perform();
    //     expect(page.getParagraphDescuentosConfiguracionGeneral(2).getAttribute('checked')).toBeTruthy();
    //     browser.actions().mouseMove(page.getParagraphDescuentosConfiguracionGeneral(3)).click().perform();
    //     expect(page.getParagraphDescuentosConfiguracionGeneral(3).getAttribute('checked')).toBeTruthy();
    //     browser.actions().mouseMove(page.getParagraphDescuentosConfiguracionGeneral(0)).click().perform();
    //     expect(page.getParagraphDescuentosConfiguracionGeneral(0).getAttribute('checked')).toBeTruthy();
    //     page.getParagraphCerrarMensajeAlerta().click();
    //     browser.actions().mouseMove(page.getParagraphMaximoDesctoConfiguracionGeneral()).click().perform();
    //     browser.actions().mouseMove(page.getParagraphVendedorMaximoDesctoConfiguracionGeneral()).click().click().click().sendKeys(protractor.Key.DOWN).sendKeys(protractor.Key.ENTER).perform();
    //     browser.actions().mouseMove(page.getParagraphDescuentoMaximoDesctoConfiguracionGeneral()).click().click().sendKeys('85').sendKeys(protractor.Key.TAB).perform();
    //     browser.actions().mouseMove(page.getParagraphDescuentoMaximoDesctoConfiguracionGeneral()).click().click().sendKeys(protractor.Key.DELETE).sendKeys('115').sendKeys(protractor.Key.TAB).perform();
    //     page.getParagraphPaginacionMostrar().click();
    //     page.getParagraphPaginacionMostrarOpciones().first().click();
    //     browser.sleep(3000);
    //     browser.actions().mouseMove(page.getParagraphOpcionesMaximoDesctoConfiguracionGeneral()).click().sendKeys(protractor.Key.DOWN).sendKeys(protractor.Key.ENTER).perform();
    //     browser.sleep(3000);
    //     page.getParagraphVentanaEmergenteConfirmar().first().click();
    //     page.getParagraphCerrarVentanaMaxDscto().click();
    //     browser.actions().mouseMove(page.getParagraphDescuentosConfiguracionGeneral(0)).click().perform();
    //     browser.actions().mouseMove(page.getParagraphDescuentosConfiguracionGeneral(1)).click().perform();
    //     browser.actions().mouseMove(page.getParagraphDescuentosConfiguracionGeneral(2)).click().perform();
    //     browser.actions().mouseMove(page.getParagraphDescuentosConfiguracionGeneral(3)).click().perform();
    // });
});