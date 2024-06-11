
const urlParams = new URLSearchParams(window.location.search);
let utm_source = urlParams.get('utm_source');
const campaign_id = urlParams.get('campaign_id');
const product   = urlParams.get('product');
if (utm_source == '' || utm_source == null || utm_source == undefined) {
    utm_source = 'Website';
}
document.getElementById('lead_source').value = utm_source;
if (campaign_id != '' && campaign_id != undefined) {
    document.getElementById('lead_campaign_id').value = campaign_id;
}
if (product != '' && product != undefined) {
    document.getElementById('lead_product_name').value = product;
}
var mndFileds = new Array('Accounts.Account Name', 'POTENTIALCF1', 'POTENTIALCF2', 'Potential Name');
var fldLangVal = new Array('Company Name', 'Email', 'Mobile', 'Contact Name');
var wfInnerWidth = window.innerWidth;
if (wfInnerWidth <= 768) {
    document.forms['BiginWebToRecordForm512906000000404006'].setAttribute('data-ux-form-alignment', 'top');
}
var name = '';
var email = '';

function removeError(fieldObj) {
    var parentElement = fieldObj.parentElement.parentElement,
        childEle = parentElement.getElementsByClassName('wf-field-error')[0];
    if (childEle) {
        parentElement.classList.remove('wf-field-error-active');
        parentElement.removeChild(parentElement.getElementsByClassName('wf-field-error')[0]);
    }
}

function setError(fieldObj, label) {
    var parentElement = fieldObj.parentElement.parentElement,
        childEle = parentElement.getElementsByClassName('wf-field-error')[0];
    if (!childEle) {
        var spanEle = document.createElement('SPAN');
        spanEle.setAttribute('class', 'wf-field-error');
        spanEle.innerHTML = label;
        parentElement.append(spanEle);
        parentElement.classList.add('wf-field-error-active');
    }
}

function validateFields512906000000404006() {
    var isReturn = true;
    var form = document.forms['BiginWebToRecordForm512906000000404006'];
    var validateFld = form.querySelectorAll('[fvalidate=true]');
    var i;
    for (i = 0; i < validateFld.length; i++) {
        var validateFldVal = validateFld[i].value;
        if (validateFldVal !== '') {
            var fLabel = validateFld[i].parentElement.parentElement.parentElement.getElementsByClassName('wf-label')[0].innerHTML;
            switch (validateFld[i].getAttribute('ftype')) {
                case 'email':
                    if (validateFldVal.match(/^([A-Za-z0-9-._%'+/]+@[A-Za-z0-9.-]+.[a-zA-Z]{2,22})$/) === null) {
                        setError(validateFld[i], 'Enter valid ' + fLabel);
                        isReturn = false;
                    }
                    break;
                case 'number':
                    if (validateFldVal.match(/^[0-9]+$/) === null) {
                        setError(validateFld[i], 'Enter valid ' + fLabel);
                        isReturn = false;
                    }
                    break;
                case 'double':
                    if (validateFldVal.match(/^[0-9]*(\.[0-9]{0,2})?$/) === null) {
                        setError(validateFld[i], 'Enter valid ' + fLabel);
                        isReturn = false;
                    }
                    break;
                case 'mobile':
                    if (validateFldVal.match(/^[6-9]\d{9}$/) === null) {
                        setError(validateFld[i], 'Enter valid ' + fLabel);
                        isReturn = false;
                    }
                    break;
            }
        }
    }
    return isReturn;
}

function checkMandatory512906000000404006() {
    var isReturn = true;
    for (i = 0; i < mndFileds.length; i++) {
        var fieldObj = document.forms['BiginWebToRecordForm512906000000404006'][mndFileds[i]];
        if (fieldObj) {
            if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length == 0) {
                if (fieldObj.type == 'file') {
                    setError(fieldObj, 'Please select a file to upload.');
                    isReturn = false;
                }
                setError(fieldObj, fldLangVal[i] + ' cannot be empty');
                isReturn = false;
            } else if (fieldObj.nodeName == 'SELECT') {
                if (fieldObj.options[fieldObj.selectedIndex].value == '-None-') {
                    setError(fieldObj, fldLangVal[i] + ' cannot be none.');
                    isReturn = false;
                }
            } else if (fieldObj.type == 'checkbox') {
                if (fieldObj.checked == false) {
                    setError(fieldObj, 'Please accept  ' + fldLangVal[i]);
                    isReturn = false;
                }
            }
        }
    }
    if (!validateFields512906000000404006()) { isReturn = false; }
    if (!isReturn) {
        var errEle = document.getElementsByClassName('wf-field-error');
        if (errEle && errEle.length > 0) {
            var inputEle = errEle[0].parentElement.getElementsByTagName('input');
            if (inputEle && inputEle.length == 0) {
                inputEle = errEle[0].parentElement.getElementsByTagName('select');
            }
            if (inputEle && inputEle.length > 0) {
                inputEle[0].focus();
            }
        }
    }
    return isReturn;
}

// document.getElementById('hidden512906000000404006Frame').addEventListener('load', function () {
//     try {
//         var doc = arguments[0].currentTarget.contentWindow.document;
//         if (doc.body.childElementCount !== 0) {
//             arguments[0].currentTarget.style.display = 'block';
//             document.getElementById('BiginWebToRecordForm1000000105005').style.display = 'none';
//         }
//     } catch (error) {
//         arguments[0].currentTarget.style.display = 'block';
//         document.getElementById('BiginWebToRecordForm512906000000404006').style.display = 'none'
//     }
// });

var formname = document.BiginWebToRecordForm;
if (!formname) {
    formname = document.BiginWebToRecordForm512906000000404006
}
if (!formname) {
    formname = document.BiginWebToContactForm512906000000404006
}
if (!formname) {
    formname = document.WebToContacts512906000000404006
}
formname.action = 'https://bigin.zoho.in/crm/WebForm';
formname.className = formname.className + ' wf-form-paid';

function validateForm() {
    return validateForm512906000000404006();
}

function validateForm512906000000404006() {
    if ((typeof checkMandatory !== 'undefined' && checkMandatory()) || (typeof checkMandatory512906000000404006 !== 'undefined' && checkMandatory512906000000404006())) {
        var formname = document.BiginWebToRecordForm;
        if (!formname) {
            formname = document.BiginWebToRecordForm512906000000404006
        }
        var formdata = $('#BiginWebToRecordForm512906000000404006').serialize();
        
        $.ajax({
            url: "https://www.paysprint.in/enquiry.html",
            method: "POST",
            data: formdata,
            success: function (res) {
            }
        });
        // event.preventDefault();
        // return false;
        formname.submit();
    } else {
        event.preventDefault();
        return false;
    }
}