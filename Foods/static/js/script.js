let but = document.querySelector('.but')
let form = document.querySelector('.form')

but.addEventListener('click', () => {
    form.classList.toggle('active')
})

document.addEventListener('DOMContentLoaded', function() {
    // Показать/скрыть пароль
    const toggleButtons = document.querySelectorAll('.toggle-password');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const passwordInput = document.getElementById(targetId);
            const eyeIcon = this.querySelector('.eye-icon');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                eyeIcon.textContent = '👁️‍🗨️';
            } else {
                passwordInput.type = 'password';
                eyeIcon.textContent = '👁️';
            }
        });
    });
    
    // Динамическая валидация
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                this.style.borderColor = '#10b981';
            } else {
                this.style.borderColor = '#e5e7eb';
            }
        });
        
        input.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                this.style.borderColor = '#e5e7eb';
            }
        });
    });
});

// Тот же скрипт что и для входа
document.addEventListener('DOMContentLoaded', function() {
    // Показать/скрыть пароль
    const toggleButtons = document.querySelectorAll('.toggle-password');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const passwordInput = document.getElementById(targetId);
            const eyeIcon = this.querySelector('.eye-icon');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                eyeIcon.textContent = '👁️‍🗨️';
            } else {
                passwordInput.type = 'password';
                eyeIcon.textContent = '👁️';
            }
        });
    });
    
    // Валидация пароля
    const password1 = document.getElementById('{{ form.password1.id_for_label }}');
    const password2 = document.getElementById('{{ form.password2.id_for_label }}');
    
    function validatePasswords() {
        if (password1.value && password2.value) {
            if (password1.value !== password2.value) {
                password2.style.borderColor = '#dc2626';
            } else {
                password2.style.borderColor = '#10b981';
            }
        }
    }
    
    if (password1 && password2) {
        password1.addEventListener('input', validatePasswords);
        password2.addEventListener('input', validatePasswords);
    }
    
    // Общая валидация
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                this.style.borderColor = '#10b981';
            } else {
                this.style.borderColor = '#e5e7eb';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    const inputs = form.querySelectorAll('.form-input, .form-textarea');
    
    // Анимация при фокусе
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
        
        // Валидация в реальном времени
        input.addEventListener('input', function() {
            validateField(this);
        });
    });
    
    function validateField(field) {
        if (field.value.trim() === '' && field.hasAttribute('required')) {
            field.style.borderColor = '#ef4444';
        } else if (field.type === 'email' && field.value.trim() !== '') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                field.style.borderColor = '#f59e0b';
            } else {
                field.style.borderColor = '#10b981';
            }
        } else if (field.value.trim() !== '') {
            field.style.borderColor = '#10b981';
        } else {
            field.style.borderColor = '#e5e7eb';
        }
    }
    
    // Обработка отправки формы
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        inputs.forEach(input => {
            if (input.hasAttribute('required') && input.value.trim() === '') {
                isValid = false;
                input.style.borderColor = '#ef4444';
            }
        });
        
        if (isValid) {
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.querySelector('.btn-text').textContent;
            
            submitBtn.querySelector('.btn-text').textContent = 'Отправка...';
            submitBtn.disabled = true;
            
            // Имитация отправки
            setTimeout(() => {
                submitBtn.querySelector('.btn-text').textContent = 'Отправлено!';
                submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                
                setTimeout(() => {
                    submitBtn.querySelector('.btn-text').textContent = originalText;
                    submitBtn.style.background = 'linear-gradient(135deg, #4f46e5, #7c3aed)';
                    submitBtn.disabled = false;
                    form.reset();
                    
                    // Сброс цветов полей
                    inputs.forEach(input => {
                        input.style.borderColor = '#e5e7eb';
                    });
                }, 2000);
            }, 1500);
        }
    });
    
    // Маска для телефона
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                value = '+7 (' + value;
                if (value.length > 7) value = value.slice(0, 7) + ') ' + value.slice(7);
                if (value.length > 12) value = value.slice(0, 12) + '-' + value.slice(12);
                if (value.length > 15) value = value.slice(0, 15) + '-' + value.slice(15);
            }
            e.target.value = value;
        });
    }
});