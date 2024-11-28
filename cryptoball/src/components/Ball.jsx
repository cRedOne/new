import React, { useEffect, useRef, useState } from 'react';

const Ball = () => {
    const ballRef = useRef(null);
    const [isMoving, setIsMoving] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [velocity, setVelocity] = useState({ vx: 0, vy: 0 });

    // Функция для установки начальной позиции шара
    const setInitialPosition = () => {
        const ball = ballRef.current;
        if (ball) {
            const container = ball.parentNode;
            setPosition({
                x: container.clientWidth / 2 - ball.clientWidth / 2,
                y: container.clientHeight / 2 - ball.clientHeight / 2,
            });
        }
    };

    // Устанавливаем начальную позицию шара при монтировании и изменении размера окна
    useEffect(() => {
        setInitialPosition();
        window.addEventListener('resize', setInitialPosition);

        return () => {
            window.removeEventListener('resize', setInitialPosition);
        };
    }, []);

    // Обработка данных акселерометра
    useEffect(() => {
        const handleMotion = (event) => {
            if (!isMoving) return;

            const { accelerationIncludingGravity } = event;
            const ax = accelerationIncludingGravity.x;
            const ay = accelerationIncludingGravity.y;

            setVelocity((prevVelocity) => ({
                vx: prevVelocity.vx + ax * 0.1,
                vy: prevVelocity.vy + ay * 0.1,
            }));
        };

        window.addEventListener('devicemotion', handleMotion);

        return () => {
            window.removeEventListener('devicemotion', handleMotion);
        };
    }, [isMoving]);

    // Обновление позиции шара и отскоки от границ
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (!isMoving) return;

            setPosition((prevPosition) => {
                const ball = ballRef.current;
                const container = ball.parentNode;

                let newX = prevPosition.x + velocity.vx;
                let newY = prevPosition.y + velocity.vy;

                if (newX <= 0 || newX + ball.clientWidth >= container.clientWidth) {
                    newX = Math.max(0, Math.min(newX, container.clientWidth - ball.clientWidth));
                    setVelocity((prevVelocity) => ({ ...prevVelocity, vx: -prevVelocity.vx }));
                }

                if (newY <= 0 || newY + ball.clientHeight >= container.clientHeight) {
                    newY = Math.max(0, Math.min(newY, container.clientHeight - ball.clientHeight));
                    setVelocity((prevVelocity) => ({ ...prevVelocity, vy: -prevVelocity.vy }));
                }

                return { x: newX, y: newY };
            });
        }, 16);

        return () => clearInterval(intervalId);
    }, [isMoving, velocity]);

    const handleClick = () => {
        setIsMoving(!isMoving);
        if (!isMoving) {
            setVelocity({ vx: 0, vy: 0 });
        }
    };

    return (
        <div
            ref={ballRef}
            className="ball"
            style={{
                position: 'absolute',
                top: `${position.y}px`,
                left: `${position.x}px`,
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: 'red',
                cursor: 'pointer',
            }}
            onClick={handleClick}
        />
    );
};

export default Ball;
