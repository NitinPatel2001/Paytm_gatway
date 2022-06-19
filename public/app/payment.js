$('#pay').click(()=>{
    const name = $('#name').val()
    const cor_name = $('#cor_name').val()
    const roll = $('#roll').val()
    const amount = 1000
    const email = $('#email').val()
    const phone = $('phone').val()
    $.post('/payment/paynow',{name,amount,email,phone},(results)=>{
        // not done because results is unknwn
    })
})