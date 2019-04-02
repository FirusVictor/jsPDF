var doc = new jsPDF('p', 'pt', 'a4');
doc.addFont('Roboto', 'MyFont', 'normal');

doc.setFont('MyFont');

doc.setFontSize(40);

doc.text('Тестовый PDF файл', 20, 40);

doc.setFontSize(16);
doc.text("Значение поля: "+price.innerHTML,20,80);

doc.save('test.pdf');
