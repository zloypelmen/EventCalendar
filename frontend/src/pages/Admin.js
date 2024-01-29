import React from 'react';
import AdminNavBar from "../components/AdminNavBar";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const Admin = () => {
    return (
        <Container>
            <AdminNavBar />

            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <Typography variant="h4" gutterBottom>
                    Руководство Администратора
                </Typography>

                <Typography variant="body1" paragraph>
                    Добро пожаловать в раздел "Руководство Администратора"! Здесь вы найдете инструкции по управлению нововведениями и карточками мероприятий в нашей системе. Ваша роль как администратора дает вам полный контроль над контентом и обеспечивает эффективное управление информацией.
                </Typography>

            </Paper>

            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <Typography variant="h5" gutterBottom>
                    Добавление нововведений:
                </Typography>
                <Typography variant="body" paragraph>
                    <strong9>Навигация:</strong9> Перейдите в раздел "Управление нововведениями", используя верхнее меню администратора.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Добавление:</strong> Нажмите на кнопку "ADD" для добавления новвоведения.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Заполнение полей:</strong> Убедитесь, что вы заполнили все обязательные поля, такие как заголовок и описание нововведения.
                </Typography>
            </Paper>

            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <Typography variant="h5" gutterBottom>
                    Управление карточками мероприятий:
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Навигация:</strong> Перейдите в раздел "Управление мероприятиями", используя соответствующий пункт меню.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Добавление карточки:</strong> Нажмите "ADD", чтобы создать новую карточку мероприятия.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Заполнение полей:</strong> Внимательно заполните все необходимые поля, включая заголовок, описание, дату и другие параметры мероприятия.
                </Typography>
            </Paper>

            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <Typography variant="h5" gutterBottom>
                    Удаление элементов:
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Выбор элемента:</strong> Перейдите к списку нововведений или мероприятий и расскройте/выберите нужный элемент.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Удаление:</strong> Нажмите на кнопку "DELETE" и перезагрузите страницу брайзера, если потребуется.
                </Typography>
            </Paper>

            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <Typography variant="body1" paragraph>
                    Обязательно соблюдайте безопасность вашего аккаунта и проверяйте данные перед добавлением. Если у вас есть вопросы или возникли сложности, не стесняйтесь обращаться за поддержкой.
                </Typography>

                <Typography variant="body1" paragraph>
                    Спасибо за ваш вклад в управление информацией нашего ресурса!
                </Typography>
            </Paper>
        </Container>
    );
};

export default Admin;