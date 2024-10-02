import React, { useState, useEffect } from 'react';
import CommandLine from '../CommandLine.js';

const SpelCommand = (props) => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [gameOver, setGameOver] = useState(false);
    const [playerWon, setPlayerWon] = useState(false);
    const command = props.command;
    const args = props.args;

    const codeword = "BOTERKAASEIEREN"; // Het geheime codewoord

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const isBoardFull = (squares) => {
        return squares.every(square => square !== null);
    };

    const minimax = (squares, depth, isMaximizing) => {
        const winner = calculateWinner(squares);
        if (winner === 'O') return 10 - depth;
        if (winner === 'X') return depth - 10;
        if (isBoardFull(squares)) return 0;

        if (isMaximizing) {
            let bestScore = -Infinity;
            for (let i = 0; i < 9; i++) {
                if (squares[i] === null) {
                    squares[i] = 'O';
                    let score = minimax(squares, depth + 1, false);
                    squares[i] = null;
                    bestScore = Math.max(score, bestScore);
                }
            }
            return bestScore;
        } else {
            let bestScore = Infinity;
            for (let i = 0; i < 9; i++) {
                if (squares[i] === null) {
                    squares[i] = 'X';
                    let score = minimax(squares, depth + 1, true);
                    squares[i] = null;
                    bestScore = Math.min(score, bestScore);
                }
            }
            return bestScore;
        }
    };

    const findBestMove = (squares) => {
        let bestScore = -Infinity;
        let bestMoves = [];
        for (let i = 0; i < 9; i++) {
            if (squares[i] === null) {
                squares[i] = 'O';
                let score = minimax(squares, 0, false);
                squares[i] = null;
                if (score > bestScore) {
                    bestScore = score;
                    bestMoves = [i];
                } else if (score === bestScore) {
                    bestMoves.push(i);
                }
            }
        }
        // Kies willekeurig een van de beste zetten
        return bestMoves[Math.floor(Math.random() * bestMoves.length)];
    };

    const makeComputerMove = () => {
        const newBoard = board.slice();
        let move;

        // 20% kans op een willekeurige zet
        if (Math.random() < 0.3) {
            const emptySquares = newBoard.reduce((acc, val, idx) => 
                val === null ? acc.concat(idx) : acc, []);
            move = emptySquares[Math.floor(Math.random() * emptySquares.length)];
        } else {
            move = findBestMove(newBoard);
        }

        newBoard[move] = 'O';
        setBoard(newBoard);
        setXIsNext(true);

        const winner = calculateWinner(newBoard);
        if (winner || isBoardFull(newBoard)) {
            setGameOver(true);
        }
    };

    const handleMove = (index) => {
        if (board[index] || calculateWinner(board) || gameOver) return;
        const newBoard = board.slice();
        newBoard[index] = 'X';
        setBoard(newBoard);
        setXIsNext(false);

        const winner = calculateWinner(newBoard);
        if (winner === 'X') {
            setPlayerWon(true);
            setGameOver(true);
        } else if (winner === 'O' || isBoardFull(newBoard)) {
            setGameOver(true);
        }
    };

    useEffect(() => {
        if (!xIsNext && !calculateWinner(board) && !isBoardFull(board)) {
            const timer = setTimeout(() => {
                makeComputerMove();
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [xIsNext, board]);

    const renderSquare = (index) => {
        return (
            <button 
                onClick={() => handleMove(index)}
                style={{
                    width: '30px',
                    height: '30px',
                    margin: '2px',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    backgroundColor: 'transparent',
                    border: '1px solid #ccc',
                    color: 'inherit',
                    cursor: 'pointer'
                }}
            >
                {board[index] || ' '}
            </button>
        );
    };

    const renderBoard = () => {
        return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div>
                    <div>{renderSquare(0)}{renderSquare(1)}{renderSquare(2)}</div>
                    <div>{renderSquare(3)}{renderSquare(4)}{renderSquare(5)}</div>
                    <div>{renderSquare(6)}{renderSquare(7)}{renderSquare(8)}</div>
                </div>
                <button 
                    onClick={resetGame}
                    style={{
                        marginLeft: '20px',
                        padding: '10px 20px',
                        fontSize: '16px',
                        backgroundColor: 'transparent',
                        border: '1px solid #ccc',
                        color: 'inherit',
                        cursor: 'pointer'
                    }}
                >
                    Reset Spel
                </button>
            </div>
        );
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setXIsNext(true);
        setGameOver(false);
        setPlayerWon(false);
    };

    if (args.length === 0 || args[0] === 'reset') {
        if (args[0] === 'reset') {
            resetGame();
        }
        const winner = calculateWinner(board);
        let status;
        if (winner) {
            status = winner === 'X' ? "Je hebt gewonnen!" : "De computer heeft gewonnen.";
        } else if (isBoardFull(board)) {
            status = "Gelijkspel!";
        } else {
            status = `Volgende speler: ${xIsNext ? 'X (jij)' : 'O (computer)'}`;
        }

        return (
            <div>
                <CommandLine command={command} />
                <p>Welkom bij Boter-Kaas-en-Eieren tegen de computer! Klik op een vak om een zet te doen.</p>
                {renderBoard()}
                <p>{status}</p>
                {playerWon && (
                    <p style={{ color: 'green', fontWeight: 'bold' }}>
                        Gefeliciteerd! Het geheime codewoord is: {codeword}
                    </p>
                )}
            </div>
        );
    } else {
        return (
            <div>
                <CommandLine command={command} />
                <p>Ongeldig commando. Gebruik 'tictactoe' om het spel te starten.</p>
            </div>
        );
    }
};

export default SpelCommand;